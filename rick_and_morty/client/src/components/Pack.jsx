import React from 'react'
import style from './style/Packs.module.css'
import {imagesSobres} from './constantes/Images'

const Packs = (props) => {

  const {handleClick,onClose,id}=props;
  
  const rarezaBack=(rearezas)=>{
    switch (rearezas) {
      case "Epic":
        return style.epic;
      case "Rare":
        return style.rare;
      default:
        return style.comun;
    }
  }

    return (      
        <div onClick={()=>{onClose(id),handleClick()}} className={style.pack}>
          <img className={`${style.image} ${rarezaBack(props.rareza)}`} src={imagesSobres} alt="" />
        </div>
  )
}

export default Packs