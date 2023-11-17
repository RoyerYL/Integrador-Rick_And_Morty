const server = require('./app');

const PORT = 3001;

const { dataBase } = require('./DB_connection');

dataBase.sync({alter:true}).then(()=>{
   server.listen(PORT, () => {
      console.log('Server raised in port: ' + PORT);
   });
})
