import style from '../style/Cards.module.css'      
import { useLocation } from 'react-router-dom';
import Card from './Card';

export default function Cards(props) {
   const {pathname} =useLocation();
   
   const {characters,onClose}=props;//array
  

      // const estilos = [
      //            style.aparecerScale,
      //            style.aparecerRotate
      //          ];
  
      // // Generar un número aleatorio entre 0 y la cantidad de imágenes
      // const randomIndex = Math.floor(Math.random() * estilos.length);

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
/**
 * @returns estilo segun el path en el que se encuentre
 */
const home=()=>{
   if(pathname==='/'){
      return style.cards;
   }
   return style.cardsPack 
}

 return <div className={home()} >
      {
         characters.map((charcter)=>
         {return(
            <div 
               key={charcter.id} //importante añdir unna KEY
            >

            <Card
            clase= {background(charcter.species)}
            id={charcter.id}
            name={charcter.name} 
            status={charcter.status}
            species={charcter.species} 
            gender={charcter.gender} 
            origin={charcter.origin} 
            image={charcter.image} 
            onClose={onClose}/>
            </div>
         )})
      }
      </div>;
   

}
