const Favorite = require("../models/Favorite");

const deleteFav= async (req,res)=>{
    const {id}=req.params

    try {
        if(!id){
            return res.status(401).jdon({error:"Falta el ID"})
        }
        
        await Favorite.destroy({
            where:{id}
        })

        const charsFavs=await Favorite.findAll()
        
        return res.status(200).json(charsFavs)

    } catch (error) {
        return res.status(500).json({error:error.message})

    }
}
module.exports={deleteFav}