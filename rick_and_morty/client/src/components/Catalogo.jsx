import axios from "axios";
import style from "./style/Catalogo.module.css";
import { useEffect, useState } from "react";
import Cards from "./models/Cards";

export default function Catalogo() {
   
   const [chracters,setChracters] = useState([])
   let url = 'https://rickandmortyapi.com/api/character'

   useEffect(()=>{
      axios(url)
         .then(({data})=>{setChracters(data.results); console.log(data.results)})
      console.log(" ---"+chracters);
   },[])

   const handleCLick =()=>{
      axios()
   }

    return (
       <div className={style.catalogo}>
      
        <Cards  characters={chracters}/>
       </div>
    );
 }
 