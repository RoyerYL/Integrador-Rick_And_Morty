
import Cards from './components/Cards';
import Nav from './components/Nav';
import style from './components/style/App.module.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import {  Route, useLocation, useNavigate } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Login from './components/Login';
import Favorites from './components/Favorites';
import Packs from './components/Packs'

function App() {

   const [characters,setCharacters] = useState([])
   const [packCharacters,setPackCharacters] = useState([])
   const {pathname} =useLocation();
   const navigate = useNavigate();
   const [access,setAccess] = useState(false)
   const EMAIL = 'root';
   const PASSWORD = 'root';
   
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   
   function onSearch(id) {
      let repetido=false
      characters.forEach(element => {
         if(element.id==id)
         {
            repetido=true;
         }
         
      });
      if(!repetido){
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });}
      else{
         alert("Personaje ya agregado")
      }
   }

   function handleClick(id) {
      setPackCharacters([])
      for (let i = 0; i < 5; i++) {
         let id=Math.round(Math.random()*826);
         characters.forEach(element => {
            if(element.id==id)
            {
               repetido=true;
            }
            
         });
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setPackCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });}
      
      }

         



      
      function onClose(id) {
         setCharacters(characters.filter((character)=>{return character.id !== Number(id)}))
         
      }
      
      useEffect(() => {
         
         !access && navigate('/');
      }, [access]);
      
      
      
      
      return (
         <div className={pathname=='/'? style.login:style.app}>

         {pathname!='/' && <Nav onSearch={onSearch}/>}
         
      <div className={pathname=='/home'? style.home:style.detail}>
         
      <Routes>
         
         <Route path='/' element={<Login login={login}/>} />
         <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
         <Route path='/favorites' element={<Favorites onClose={onClose} />}/>      
         <Route path='/about' element={<About />}/>
         <Route path='/packs' element={<Packs  charactersPack={packCharacters} handleClick={handleClick}/>}/>
         <Route path='/detail/:id' element={<Detail />}/>
         
      </Routes>

      </div>
      


      </div>
   );
   
}
   
   export default App;
   