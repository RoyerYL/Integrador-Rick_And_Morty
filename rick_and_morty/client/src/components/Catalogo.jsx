import axios from "axios";
import style from "./style/Catalogo.module.css";
import { useEffect, useState } from "react";
import Cards from "./models/Cards";

export default function Catalogo() {
   
   const [chracters,setChracters] = useState([])
   const [url,setUrl] = useState("https://rickandmortyapi.com/api/character")
   // let url = 'https://rickandmortyapi.com/api/character'


   useEffect(()=>{
      axios('https://rickandmortyapi.com/api/character')
         .then(({data})=>{
            setChracters(data.results) , 
            setUrl(data.info.next)
         })
   },[])

   const handleCLick =()=>{
 
      if(url){
         axios(url)
            .then(({data})=>{
               setChracters((oldChars) => [...oldChars, ...data.results])
               setUrl(data.info.next)
            })
      }
   }

    return (
       <div className={style.catalogo}>
      
        <Cards  characters={chracters}/>
        <button onClick={handleCLick}>Ver más</button>
       </div>
    );
 }
 