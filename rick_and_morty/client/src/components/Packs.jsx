import React, { useState } from 'react'
import style from './style/Packs.module.css'
import Pack from './Pack'
import Card from './Card'
import axios from 'axios'
import Cards from './Cards'
const Packs = (props) => {

const [packs,setPacks]=useState([])
const [id_,setId]=useState(0)

const {handleClick,charactersPack}=props
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

  return (
    <div className={style.panel}>
      
    <div className={style.containerPacks}>
      

        <button className={style.botonAdd} onClick={addPack}>+ pack</button>
      
        <div className={style.packs} >
          {packs.map((pack,index)=>
          {return(
            <Pack key={pack.id} rareza={pack.rareza} handleClick={handleClick}/>
            )})
          }
        </div>

        <div className={style.cardsPack}>
          <Cards  characters={charactersPack}  />
        </div>

    
      
    </div>
</div>
)
}

export default Packs