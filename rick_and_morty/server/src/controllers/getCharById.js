const axios =require('axios')

const express =require('express');
const routerCharacter=express.Router()
const getCharById=(req,res)=>{
    const id=req.params.id


    const URL= `https://rym2.up.railway.app/api/character/${id}`;
    
    axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response)=> {
            let data={
                    id:response.data.id,
                    name:response.data.name,
                    gender:response.data.gender,
                    species:response.data.species,
                    origin:response.data.origin,
                    image:response.data.image,
                    status:response.data.status}
            
                // res.writeHead(200,{"Content-Type":"application/json"})
                // res.end(JSON.stringify(data))
                res.status(200).json(data);
        })
        .catch((error)=>{
            res.writeHead(500,{"Content-Type":"text/plain"})
            res.end(error.response.data.error)
        })
}

routerCharacter.get('/:id',(req,res)=>{ getCharById(req,res)})

module.exports = routerCharacter
   