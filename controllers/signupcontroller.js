const {SignUp} = require("../models")

async function getAllSignUps(req,res){
   try{
    const signups = await SignUp.findAll()
    res.send(signups)
   }catch(error){
      throw error
   }
}
const Login = async (req, res) => {
   try {
     const user = await SignUp.findOne({
       where: { username: req.body.username },
       raw: true
     })
     if (
       user &&
       (await middleware.comparePassword(user.password, req.body.password))
     ) {
       let payload = {
         id: user.id,
         username: user.username,
         password: user.password,
         comfrimpassword:user.comfrimpassword,
         email: user.email
       }    
       return res.send({ user: payload})
     }
     res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
   } catch (error) {
     throw error
   }
 }
module.exports = {getAllSignUps}
// still have to create middle wear for login and sign up  
//create a route for login end point login and sign up
//