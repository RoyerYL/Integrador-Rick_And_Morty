import React from 'react'
import style from '../style/Packs.module.css'
import {imagesSobres} from '../constants/Images'

const Packs = ({handleClick,onClose,id,rareza}) => {
  
    return (      
        <div onClick={()=>{onClose(id),handleClick()}} className={style.pack}>
          <img className={`${style.image} ${rarezaStyle(rareza)}`} src={imagesSobres} alt="" />
        </div>
  )
}

export default Packs

/**
 * Funcion para determinar el estilo de un pack segun la rareza indicada
 */
const rarezaStyle=(rearezas)=>{
    switch (rearezas) {
      case "Epic":
        return style.epic;
      case "Rare":
        return style.rare;
      default:
        return style.comun;
    }
  }
