import { useEffect, useState } from 'react';
import Formm from './Form'
import style from './style/Login.module.css'


export default function Login(props) {

   const [image,setImage]=useState("")

   useEffect(//se activa automaticamente cuando se recarga la pagina, se ejecuta después de que el componente ha sido renderizado en el DOM
      ()=>{
         // Lista de rutas de imágenes
         const images = [
             "https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-png-lalingla-deviantart-21.png",
             "https://www.sonsofgotham.com/cdn/shop/collections/rick-morty.png?v=1660054592",
             "https://realistickco.com/cdn/shop/products/RickAndMortySticker_54d9e093-40ca-4c7c-8275-37acaddfc57d.png?v=1681074372",
             "https://vignette.wikia.nocookie.net/yazzytest/images/9/9b/Rick_and_Morty_Portal.png/revision/latest?cb=20160830070335",
             "https://media.cdn.adultswim.com/uploads/20230927/239271336482-rick-and-morty-season-7-mobileHero-011401.png",
             "https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-rick-morty-projectacademy-medium-17.png",
             "https://rickandmortyapi.com/icons/icon-512x512.png?v=1538abef51e33ef514e8fe1ab9aeab4e",
             "https://stickerswiki.ams3.cdn.digitaloceanspaces.com/isticker2e0de8ebb3f04159b32e73601e2b4dad_by_istickeri19_bot/6341176.512.webp"
             
            
             
             // Agrega aquí más rutas de imágenes
         ];
     
         // Generar un número aleatorio entre 0 y la cantidad de imágenes
         const randomIndex = Math.floor(Math.random() * images.length);
   
         setImage(images[randomIndex])
     }
   )

   return (
       <div className={style.login}>
         <div>
            <img id="random-img" className={style.logo} src={image} alt="" />
         </div>
         <div>
        <Formm login={props.login}/>
         </div>
       </div>
    );
 }
 