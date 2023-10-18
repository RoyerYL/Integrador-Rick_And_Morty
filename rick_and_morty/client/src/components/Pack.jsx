import React from 'react'
import style from './style/Packs.module.css'

const Packs = (props) => {
  const {handleClick}=props;
  
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
      <div onClick={()=>handleClick()} className={style.pack}>
        <img className={`${style.image} ${rarezaBack(props.rareza)}`} src="https://es.web.img3.acsta.net/pictures/18/10/31/17/34/2348073.jpg" alt="" />
      </div>
)
}

export default Packs