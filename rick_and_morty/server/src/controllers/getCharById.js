const axios =require('axios')

const express =require('express');
const URL= `https://rickandmortyapi.com/api/character/`;

const getCharById=(req,res)=>{
    const {id}=req.params
    
    axios
        .get(`${URL}${id}`)
        .then((response)=> {
            if(response.data){
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
            }else{
                res.status(400).json({mesage:"Not found"});
            }


        })
        .catch((error)=>{
            res.status(500).json({message:error.message})
            // res.writeHead(500,{"Content-Type":"text/plain"})
            // res.end(error.response.data.error)
        })
}



module.exports = {getCharById}
   