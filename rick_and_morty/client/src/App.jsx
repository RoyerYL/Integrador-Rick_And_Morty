
import Cards from './components/models/Cards';
import Nav from './components/navBar/Nav';
import style from './components/style/App.module.css'

import About from './components/About';
import Detail from './components/Detail';
import Login from './components/Login';
import Favorites from './components/Favorites';
import Packs from './components/Packs'
import Catalogo from './components/Catalogo';
   
import axios from 'axios';
import { useEffect, useState } from 'react';
import {  Route, useLocation, useNavigate } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import { ABOUT_PATH, CATALOGO_PATH, DETAIL_ID_PATH, FAVORITES_PATH, HOME_PATH, LOGIN_PATH, PACKS_PATH } from './paths/paths';

function App() {

   /************ PATH ************/
   const {pathname} =useLocation();
   const navigate = useNavigate();
   
   /************ SEGURIDAD ************/

   const [access,setAccess] = useState(false)

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL,{params:{email,password}})
         .then(({ data }) => {
            const { access } = data;
            setAccess(data);
            access && navigate(HOME_PATH);
         });
   }

   useEffect(() => {
         !access && navigate(LOGIN_PATH);
      }, [access]);
      
   /************ ESTADO - CHARACTER ************/

   const [characters,setCharacters] = useState([])
   const [packCharacters,setPackCharacters] = useState([])

   async function onSearch(id) {
      let repetido=false
      
      characters.forEach(element => {
         if(element.id==id)
         {
            repetido=true;
         }
      });

      if(!repetido){
         try {
            const {data}=await axios(`http://localhost:3001/rickandmorty/character/${id}`)
            setCharacters((oldChars) => [...oldChars, data]);
         } catch (error) {
            window.alert('¡No hay personajes con este ID!');
         }
      
      }
      else{
         alert("Personaje ya agregado")
      }
   }

   function handleClick() {
      setPackCharacters([])
      for (let i = 0; i < 5; i++) {
         let id=Math.round(Math.random()*826);
         characters.forEach(element => {
            if(element.id==id)
            {
               repetido=true;
            }
         });
         axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
               setPackCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
               }
         });
      }
   }
      
   function onClose(id) {
         setCharacters(characters.filter((character)=>{return character.id !== Number(id)}))  
      }
      
   /************ APP ************/
   
      return (
         <div className={pathname===LOGIN_PATH? style.login:style.app}>
            {pathname!==LOGIN_PATH && 
            <Nav onSearch={onSearch}/>}
            
            <Routes>
               
               <Route path={LOGIN_PATH} element={<Login login={login}/>} />
               <Route path={HOME_PATH} element={<Cards characters={characters} onClose={onClose} />}/>
               <Route path={FAVORITES_PATH} element={<Favorites onClose={onClose} />}/>      
               <Route path={ABOUT_PATH} element={<About />}/>
               <Route path={PACKS_PATH} element={<Packs setPackCharacters={setPackCharacters} charactersPack={packCharacters} handleClick={handleClick}/>}/>
               <Route path={DETAIL_ID_PATH} element={<Detail />}/>
               <Route path={CATALOGO_PATH} element={<Catalogo />} />
            </Routes>
        </div>
      );
   
}
   
   export default App;
   