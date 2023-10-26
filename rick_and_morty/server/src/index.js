// const http = require('http');
// const {data} = require("./utils/data");
// const fs =require('fs');
// const {getCharById}=require('./controllers/getCharById')

// function encontrarObjetoPorId(array, id) {
//     for (let i = 0; i < array.length; i++) {

//         if (array[i].id === Number(id)) {

//             return array[i];
//         }
//     }
//     return null;
// }

// http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');//nos permite que cualquiera mande una peticion

//     let {url}=req;
//     let id;
//     if (/\/rickandmorty\/character\/\d+/.test(url)) {
//         url=url.split("/");
//         id=url.pop();
//         url=url.join("/")
//     }
    

//     switch (url) {
//         case "/rickandmorty/character":
//             getCharById(res,id);

//             // res.writeHead(200,{"Content-Type":"application/json"})
            
//             // res.end(JSON.stringify(encontrarObjetoPorId(data, id)))
//             break;

//         default:
//             res.writeHead(400);
//             res.end()
//             break;
//     }


// }).listen(3001,"localhost");//server localhost:3001rsrs

const express = require('express');
const { getCharById } = require('./controllers/getCharById');
const routerCharacter =require('./controllers/getCharById');
const PORT = 3001;
const server = express();

server.use(express.json())
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Reemplaza con tu dominio permitido
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
    // Habilita cookies y credenciales (si es necesario)
    res.header('Access-Control-Allow-Credentials', 'true');
  
    if (req.method === 'OPTIONS') {
      // Respuesta preflights CORS
      res.status(204).send();
    } else {
      next();
    }
  })
server.use('/rickandmorty/character',routerCharacter)


server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});