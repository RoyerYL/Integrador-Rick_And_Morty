import style from './style/Cards.module.css'
import Card from './Card';


export default function Cards(props) {
  const {characters,onClose}=props;//array
  

      const estilos = [
                 style.aparecerScale,
                 style.aparecerRotate
               ];
  
      // Generar un número aleatorio entre 0 y la cantidad de imágenes
      const randomIndex = Math.floor(Math.random() * estilos.length);

       
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

 return <div className={style.cardsContainer}>

      <div className={style.cards} >
      {
         characters.map((charcter,index)=>
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
            origin={charcter.origin?.name} 
            image={charcter.image} 
            onClose={onClose}/>
            </div>
         )})
      }
      </div>;
   </div>

}
