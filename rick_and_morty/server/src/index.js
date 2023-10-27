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
const {router} =require('./routes/index');
const PORT = 3001;
const server = express();


server.use(express.json())
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use("/rickandmorty",router)

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});