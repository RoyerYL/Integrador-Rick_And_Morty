const { Favorite } = require("../DB_connection");

const postFav=async(req ,res)=>{
    const{id,name,origin,status,image,species,gender}=req.body


    if(!id || !name || !origin || !status || !image || !species || !gender){
       return res.status(400).json({error:"Faltan datos"})
    }

    try {
        const [fav,created]=await Favorite.findOrCreate({
            where:{ id ,
                name,
                origin,
                status,
                image,
                species,
                gender}        
        })

        if (!created) {
            return res.status(409).json({error:"El email ya está registrado "})
        }


        const allFav=await Favorite.findAll()

        return res.status(201).json(allFav);

    } catch (error) {
        return res.status(500).json({error:error.message})

    }

}
module.exports={postFav}