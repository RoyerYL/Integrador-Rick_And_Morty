import axios from "axios";
import style from "./style/Catalogo.module.css";
import { useEffect, useState } from "react";
import Cards from "./models/Cards";

export default function Catalogo() {
   
   const [chracters,setChracters] = useState([])
   const [page,setPage] = useState(2)
   const [fin,setFin] = useState(false)
 
   const url = "https://rickandmortyapi.com/api/character?page="
   // let page=2

  async function handleClick() {
  try {
    let currentPage = page;
    for (let i = 0; i < 6; i++) {
      if (url || page<43) {
        const { data } = await axios(url + currentPage);
        setChracters((oldChars) => [...oldChars, ...data.results]);
        currentPage += 1;
      }
    }

    // Actualizar el estado de page después de completar todas las solicitudes
    console.log();
    setPage(currentPage);
  } catch (error) {
   setFin(true)
    throw new Error("No existe la url");
  }
}


   useEffect(()=>{
       axios('https://rickandmortyapi.com/api/character')
         .then(({data})=>{
            setChracters(data.results) 
            handleClick()
           
         })
   },[])


    return (
      <div className={style.catalogo}>
      
      <Cards  characters={chracters}/>

      {!fin &&  
         <button onClick={handleClick}>Ver más</button>}
       
      </div>
    );
 }
 