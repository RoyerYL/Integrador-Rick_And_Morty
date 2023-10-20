const axios =require('axios')
const getCharById=(res,id)=>{
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
                
                res.writeHead(200,{"Content-Type":"application/json"})
                res.end(JSON.stringify(data))
        })
        .catch((error)=>{
            res.writeHead(500,{"Content-Type":"text/plain"})
            res.end(error.response.data.error)
        })
}

module.exports = {
    getCharById
};
   