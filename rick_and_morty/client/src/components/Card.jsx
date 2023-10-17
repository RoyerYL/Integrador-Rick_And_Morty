import { useDispatch } from 'react-redux';
import style from './style/Card.module.css'
import { Link, useLocation } from 'react-router-dom';
import { add_fav, remove_fav } from '../redux/action';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Card(props) {
//redux
const myFavorites=useSelector((state)=>state.myFavorites)
const dispatch = useDispatch();

const {pathname} =useLocation();


const [isFav,setIsFav]=useState(false)

   
useEffect(() => {
   myFavorites.forEach((fav) => {
     if (fav.id === props.id) {
       setIsFav(true);
     }
   });
 }, [myFavorites]);

   const handleFavorite = () => {
        
    };
// className={index===characters.length-1? estilos[randomIndex]:style.aparecerScaleRotation}
   return (
      <>
      <div className={`${style.card} ${props.clase}`} >
         <div className={style.perfil}>
            {pathname=='/home' &&<button className={style.cros} onClick={()=>{props.onClose(props.id)}}> </button>}
            <img src={props.image} alt='' />   

         </div>
         <div className={style.detail}>
         <div>
            <Link to={`/detail/${props.id}`}>      
            <h2 className={style.name}>{props.name}</h2>
            </Link>
         </div>
         
         <div>
            <h2 className={style.origin}>{props.origin}</h2>
         </div>
         <div className={style.info}>
            <h2>{props.status}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
            {isFav?
            (<button className={style.heart} onClick={()=>{dispatch(remove_fav(props.id)); setIsFav(!isFav);}}>❤️</button>) 
            :
            (<button className={style.heart} onClick={()=>{dispatch(add_fav(props)); setIsFav(!isFav);}}>🤍</button>)}
         </div>
         </div>
      </div>
      </>
   );
}
