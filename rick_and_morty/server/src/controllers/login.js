const { User } = require('../DB_connection');

const login=async(req,res)=>{
    const { email,password } = req.query

    if(!email || !password)res.status(404).json({error:"Faltan datos"})

    const user=await User.findOne({
        where:{email,password}
    })

    if(user){
        res.status(200).json({access:true});
    }else{
        res.status(200).json({access:false});
    }



}
module.exports={login}

// const users = require('../utils/users');
// /**
//  * Espera:
//  * /login?email=root & password=root 
//  *  
//  */
// const login=(req,res)=>{
//     const {email,password}=req.query
//     const found = users.some(obj=>obj.email===email && obj.password===password )
//     if(found)
//     {
//         
//     }else{
//         res.status(200).json({access:false});
//     }

// }
// module.exports={login}