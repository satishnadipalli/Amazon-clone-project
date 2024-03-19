require("express-async-errors");
const jwt = require("jsonwebtoken");
const UserDB = require("./UserSchema");
const UserAddress = require('./AddressSchema');
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"satishnadipalli1@gmail.com",
        pass:"rjwv dotz kchr vyrn"
    }
})


const sendWelcomeEmail = (email) =>{
    const mailOptions = {
        from:"satishnadipalli1@gmail.com",
        to:email,
        subject:"Welcome email form KRI-SA SITES",
        html: `
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        padding: 20px;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #fff;
                        padding: 20px;
                        border-radius: 10px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #333;
                    }
                    p {
                        color: #666;
                        margin-bottom: 20px;
                    }
                    .logo {
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    img {
                        max-width: 100%;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="logo">
                        <img src="https://ativancouver.ca/wp-content/uploads/jet-engine-forms/12/2023/01/lord-krishna-arjuna-logo-small-sig-1536x1536.png" alt="KRI-SA SITES Logo">
                    </div>
                    <h1>Welcome to KRI-SA SITES!</h1>
                    <p>Thank you for signing up with us. We're thrilled to have you on board!</p>
                    <p>Here are some key features of our e-commerce site:</p>
                    <ul>
                        <li>Wide range of products to choose from</li>
                        <li>Secure payment options</li>
                        <li>Fast and reliable shipping</li>
                    </ul>
                    <p>Start exploring our site now and enjoy a seamless shopping experience!</p>
                </div>
            </body>
            </html>
        `,
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

const postData = async(req,res) =>{

    const { lastname, email, password } = req.body;
    const profilePhoto = req.file.filename;
    console.log("profilephoto",profilePhoto)
    const today = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const formattedDate = formatter.format(today);
    const createdDate = formattedDate;

    if(!lastname || !email || !password){
        return res.status(201).json({msg : "please provide valid credentials"})
    }
    const is_user_exist = await UserDB.findOne({email})

    if(is_user_exist){
        return res.status(401).json({msg:"the user already exists please try with another email"})
    }

    const CreatedUser =await UserDB.create({lastname,email,password,profilePhoto,createdDate});
    const token = jwt.sign({lastname,email},process.env.JWT_SECRET,{expiresIn:"30d"});
    sendWelcomeEmail(email);
    res.status(200).json({lastname,email,profilePhoto,token,isAdmin:false});
}


const login = async(req,res) =>{
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(500).json({msg : "please provide valid credentials"})
    }

    const UserInDB = await UserDB.findOne({email});


    if(password !== UserInDB.password){
        return res.status(401).json({msg:"password missmatched"});
    }

    const token = jwt.sign({email,lastname:UserInDB.lastname},process.env.JWT_SECRET,{expiresIn:'30d'})

    res.status(200).json({lastname:UserInDB.lastname,isAdmin:UserInDB.isAdmin,email,token,profilePhoto:UserInDB.profilePhoto});
}




const addAddress = async(req,res) =>{
    const { fullName,villageName,mandalName ,districtName ,pinCode ,stateName ,id } = req.body;

    if(!fullName || !villageName || !mandalName || !districtName || !pinCode || !stateName){
        return res.status(401).json({msg:"please provide all the details"})
    }
    
    const createdBy = req.user._id;

    const address = await UserAddress.create({fullName,villageName,mandalName ,districtName ,pinCode ,stateName ,id,createdBy});
    
    res.status(200).json({address});
}

const getAlladdress = async(req,res)=>{
    const createdBy = req.user._id;
    const alladdress = await UserAddress.find({createdBy});
    res.status(200).json({alladdress});
}

const deleteAddresds = async (req, res) => {
    const { productId } = req.params;  
    const { _id } = req.user;
    
    const userWithEmail = await UserDB.findOne({ _id });

    
    const alladdress = await UserAddress.findOneAndDelete({createdBy:_id,_id:productId})
    res.status(200).json({alladdress});

}

const selectDefaultAddressEdit = async(req,res) =>{
    const {addressId} = req.params;
    const {_id} = req.user;
    const userWithEmail = await UserDB.findOne({_id});

   try {
    const alladdres = await UserAddress.findByIdAndUpdate(
        addressId,
        { $set:{default:true} },
        {new:true}
    )

    const alladdress = await UserAddress.updateMany(
      { createdBy: _id, _id: { $ne: addressId } },
      { $set: { default: false } }
    );

    res.status(200).json({alladdres});
   } catch (error) {
        
        res.status(404).json({msg:"there is no address regarding to the address that you have provided"})
   }

}

const getallUsers = async (req, res) => {
    try {
        const AllUsers = await UserDB.find({});
        const filteredUsers = AllUsers.map((element) => {
            const { _id, lastname, email, isAdmin, createdDate, profilePhoto } = element;
            return {
                _id,
                lastname,
                email,
                isAdmin,
                createdDate,
                profilePhoto
            };
        });
        console.log(filteredUsers);
        res.status(200).json({filteredUsers}); 
    } catch (error) {
        console.error("Error fetching all users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const updateUserisAdmin = async (req, res) => {
    try {
      const { email, isAdmin } = req.body;
      let existedUser = await UserDB.findOne({ email });

      if (!existedUser) {
        return res.status(404).json({ msg: "The user does not exist with the provided email" });
      }

      existedUser.isAdmin = isAdmin;
      const updatedUser = await UserDB.findOneAndUpdate({ email }, { $set: { isAdmin } }, { runValidators: true, new: true });

      res.status(200).json({ updatedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Internal server error" });
    }
};


const uppdateUserProfile = async(req,res)=>{

}
module.exports = {postData,updateUserisAdmin,uppdateUserProfile,login,addAddress,getAlladdress,deleteAddresds,selectDefaultAddressEdit,getallUsers}