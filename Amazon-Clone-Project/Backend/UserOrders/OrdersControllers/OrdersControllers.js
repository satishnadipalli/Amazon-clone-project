const UserDB = require("../../UserSchema");
const ORDERS = require("../OrdersSchema/OrdersSchema");
const nodemailer = require("nodemailer");
const PRODUCTS = require("../../ProductsSchema/productsSchema");
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"satishnadipalli1@gmail.com",
        pass:"rjwv dotz kchr vyrn"
    }
})

const sendWelcomeEmail = (email,productsArray) =>{
    const mailOptions = {
        from:"satishnadipalli1@gmail.com",
        to:email,
        subject:"Thank You for ordering with KRI-SA sites",
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
                        width:50px;
                        height:50px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="logo">
                        <img src="https://ativancouver.ca/wp-content/uploads/jet-engine-forms/12/2023/01/lord-krishna-arjuna-logo-small-sig-1536x1536.png" alt="KRI-SA SITES Logo">
                    </div>
                    <h2>Exprience the super delivery of KRI-SA SITES!</h2>
                    <p>Thank you for signing up with us. We're thrilled to have you on board!</p>
                    ${productsArray}
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

const createOrder = async (req, res) => {
    const { _id } = req.user;
    const userExist = await UserDB.findOne({ _id });
  
    if (!userExist) {
      return res.status(404).json({ msg: "the user doesn't exist" });
    }
    const userId = userExist._id;
    const products = req.body.producsId;
    const productsArray = products.map((element)=>{
      return(
        `<p>${element.productId} Iphone XE $1,02,516</p>`
      )
    })
    const productNames = await PRODUCTS.find()
    const today = new Date();
  
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
  
    const threeDaysLater = new Date(today);
    threeDaysLater.setDate(today.getDate() + 3);
  
    const threeday = threeDaysLater.getDate().toString().padStart(2, '0');
    const threemonth = (threeDaysLater.getMonth() + 1).toString().padStart(2, '0');
    const threeyear = threeDaysLater.getFullYear();
  
    const threeformattedDate = `${threeday}/${threemonth}/${threeyear}`;
  
    const email = userExist.email;
    const createdBy = _id;
    const orderDate = formattedDate;
    const status = "pending"
  
    const createdOrder = await ORDERS.create({
      ...req.body,
      userId,
      status,
      createdBy,
      email,
      orderDate,
      deliverTime: threeformattedDate,
    });
    sendWelcomeEmail(email,productsArray);
    res.status(200).send({ data: createdOrder });

  };
  

const getuserOrders = async(req,res)=>{
  const {_id} = req.user;
  const userOrders = await ORDERS.find({createdBy:_id});
  res.status(200).json({userOrders})
}
module.exports = {createOrder,getuserOrders}