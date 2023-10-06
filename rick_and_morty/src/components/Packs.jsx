import React, { useState } from 'react'
import style from './style/Packs.module.css'
import Pack from './Pack'
const Packs = () => {
const [packs,setPacks]=useState([])
const addPack=()=>{

        setPacks([...packs,1])
   
}

  return (
    <div className={style.panel}>
      <button className={style.botonAdd} onClick={addPack}>+ pack</button>
      
      <div className={style.packs}>

        {packs.map((charcter)=>
        {return(
            <Pack />
            )})
            }
        </div>
    </div>
)
}

export default Packs