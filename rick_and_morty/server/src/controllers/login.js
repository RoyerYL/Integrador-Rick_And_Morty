const users = require('../utils/users');
/**
 * Espera:
 * /login?email=root & password=root 
 *  
 */
const login=(req,res)=>{
    const {email,password}=req.query
    const found = users.some(obj=>obj.email===email && obj.password===password )
    if(found)
    {
        res.status(200).json({access:true});
    }else{
        res.status(200).json({access:false});
    }

}
module.exports={login}