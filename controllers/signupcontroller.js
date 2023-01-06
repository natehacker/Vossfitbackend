const {SignUp} = require("../models")

async function getAllSignUps(req,res){
   try{
    const signups = await SignUp.findAll()
    res.send(signups)
   }catch(error){
      throw error
   }
}
module.exports = {getAllSignUps}