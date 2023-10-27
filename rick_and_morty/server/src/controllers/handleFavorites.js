let favoritos=[]
const postFav=(req,res)=>{
    
    favoritos.push(req.body)

    res.status(200).json(favoritos);
}

const deleteFav=(req,res)=>{

    favoritos=favoritos.filter((fav)=>{fav.id!==Number(req.params)})

    res.status(200).json(favoritos);
}
module.exports={postFav,deleteFav}