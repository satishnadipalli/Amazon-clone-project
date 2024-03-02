const jwt = require('jsonwebtoken');
const UserDB = require('../UserSchema');

const authenticateToken = async(req, res, next) => {
  const authHeader = req.header('Authorization');

  
  if (!authHeader) {
    return res.status(401).json({ msg: '......' });
  }

  const token = authHeader.split(" ")[1];
  
  if(!token){
    res.status(404).json({msg:"no token please signin"})
  }

  const decode = jwt.verify(token, process.env.JWT_SECRET)

  const CurrentUser = await UserDB.findOne({email:decode.email});

  const {_id} = CurrentUser;
  
   
  
  req.user = {_id};
  next();

};


module.exports = {authenticateToken};
