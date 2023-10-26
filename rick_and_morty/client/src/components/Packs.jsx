import React, { useEffect, useState } from 'react'
import style from './style/Packs.module.css'
import Pack from './Pack'
import Card from './Card'
import axios from 'axios'
import Cards from './Cards'
const Packs = (props) => {

const [packs,setPacks]=useState([])
const [id_,setId]=useState(0)

const {handleClick,charactersPack,setPackCharacters}=props
const rearezas = [
  "Epic","Rare","Común"
];

const randomIndex = Math.floor(Math.random() * rearezas.length);

const addPack=()=>{
  setId(id_+1)
  if(packs.length<5){
    setPacks([...packs,{id:id_,rareza:rearezas[randomIndex]}])
  }
}
function onClose(id) {
  setPacks(packs.filter((pack)=>{return pack.id !== Number(id)}))  
}
useEffect(()=>{setPackCharacters([])},[])
  return (
    <div className={style.panel}>
      
    <div className={style.containerPacks}>
      <div>
        
        <div className={style.packs} >
          <button className={style.botonAdd} onClick={addPack} title='Añadir'>➕</button>
          {packs.map((pack)=>
          {return(
            <Pack key={pack.id} id={pack.id} rareza={pack.rareza} handleClick={handleClick} onClose={onClose}/>
            )})
          }
        </div>

      </div>
      <div>
        
        <Cards  characters={charactersPack}  />

      </div>
    </div>
</div>
)
}

export default Packs