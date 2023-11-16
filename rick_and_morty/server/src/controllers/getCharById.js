const axios =require('axios')

const express =require('express');
const URL= `https://rickandmortyapi.com/api/character/`;


const getCharById=async(req,res)=>{
    try {
        const {id}= req.params

        const{data}=await axios.get(`${URL}${id}`)
        let character={}
        if(data){
            character={
                id:data.id,
                name:data.name,
                gender:data.gender,
                species:data.species,
                origin:data.origin,
                image:data.image,
                status:data.status}

        res.status(200).json(character);
        }

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}



module.exports = {getCharById}
   