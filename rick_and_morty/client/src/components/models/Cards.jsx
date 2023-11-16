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
const background =(status)=>{
   switch (status) {
      case "Alive":
         return style.alien;
         
      case "Dead":
         return style.default;   
   
      default:
         return style.human;
         
   }
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
    
 <div className={home()} >
      {
         characters.map((charcter)=>
         { return (
            <div  key={charcter.id}>
              <Card
               
                clase={background(charcter.status)}
                id={charcter.id}
                name={charcter.name}
                status={charcter.status}
                species={charcter.species}
                gender={charcter.gender}
                origin={charcter.origin}
                image={charcter.image}
                onClose={onClose}
              />
            </div>
          )
      })
      }
       
      
      </div>
      </div>
)
   

}
