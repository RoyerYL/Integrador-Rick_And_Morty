import React, { useState } from 'react'
import style from './style/Packs.module.css'
import Pack from './Pack'
import Card from './Card'
import axios from 'axios'
import Cards from './Cards'
const Packs = (props) => {
const [packs,setPacks]=useState([])

const {handleClick,charactersPack}=props
const addPack=()=>{
        setPacks([...packs,1])
}

  return (
    <div className={style.panel}>
      
    <div className={style.containerPacks}>
      

        <button className={style.botonAdd} onClick={addPack}>+ pack</button>
      
        <div className={style.packs} >
          {packs.map((aux,index)=>
          {return(
            <Pack key={index} handleClick={handleClick}/>
            )})
          }
        </div>

        <div className={style.cardsPack}>
          <Cards characters={charactersPack}  />
        </div>

    
      
    </div>
</div>
)
}

export default Packs