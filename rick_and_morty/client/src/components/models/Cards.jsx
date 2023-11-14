import style from '../style/Cards.module.css'      
import { useLocation } from 'react-router-dom';
import Card from './Card';
import { HOME_PATH } from '../../paths/paths';

export default function Cards(props) {
   const {pathname} =useLocation();
   
   const {characters,onClose}=props;//array
  

/**
 * 
 * @param {*} especie 
 * @returns estilos segun el tipo de especie
 */     
const background =(especie)=>{
   switch (especie) {
      case "Human":
         return style.human;
      case "Alien":
         return style.alien;
   
      default:
         return style.default;
   }
}

const handleClick =(evento)=>{
   document.querySelector(`.${style.ligthBox}`).classList.remove(style.show)
   document.querySelector('.show-img').src=evento.target.src
   document.querySelector(`.${style.ligthBox}`).classList.add(style.show);
}

const handleClose=()=>{
 
      document.querySelector(`.${style.ligthBox}`).classList.remove(style.show)
   
}

/**
 * @returns estilo segun el path en el que se encuentre
 */
const home=()=>{
   if(pathname===HOME_PATH){
      return style.cards;
   }
   return style.cardsPack 
}

 return (
<div className={style.containerCards}>
    <div className={style.ligthBox} >
               <img className='show-img' src="" alt='' />
               <button onClick={handleClose} className={style.btn}>❌</button>
               <h2></h2>
            </div>
 <div className={home()} >
      {
         characters.map((charcter)=>
         { return (
            <div  key={charcter.id}>
              <Card
               
                clase={background(charcter.species)}
                id={charcter.id}
                name={charcter.name}
                status={charcter.status}
                species={charcter.species}
                gender={charcter.gender}
                origin={charcter.origin}
                image={charcter.image}
                onClose={onClose}
                handleClick={handleClick}
              />
            </div>
          )
      })
      }
       
      
      </div>
      </div>
)
   

}
