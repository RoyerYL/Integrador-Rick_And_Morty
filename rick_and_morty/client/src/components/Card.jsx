import { useDispatch } from 'react-redux';
import style from './style/Card.module.css'
import { Link, useLocation } from 'react-router-dom';
import { add_fav, remove_fav } from '../redux/action';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
export default function Card(props) {
const {pathname} =useLocation();

const myFavorites=useSelector((state)=>state.myFavorites)
const dispatch = useDispatch();


const [isFav,setIsFav]=useState(false)

   
useEffect(() => {
   myFavorites.forEach((fav) => {
     if (fav.id === props.id) {
       setIsFav(true);
     }
   });
 }, [myFavorites]);

 const handleFavorite = () => {
   isFav ? dispatch(remove_fav(props.id)) : dispatch(add_fav(props));
   setIsFav(!isFav);
 };

   return (
      <div className={`${style.card} ${props.clase}`} >
         <div className={style.containerName}>
            <h2 className={style.name}>{props.name}</h2>
         </div>

         <div className={style.perfil}>

            <Link to={`/detail/${props.id}`}>      
            <img className={props.status==='Alive'?style.alive:style.dead} src={props.image} alt='' />   
            </Link>
            <div className={style.containerStatus}>
               <h2 className={style.status}>{props.status}</h2>
            </div>
         </div>

         <div className={style.containerOrigin}>
            <h2 className={style.origin}>{props.origin?.name}</h2>
         </div>
 
            <div className={style.info}>
               <div className={style.containerSpecies}>
                  <h2 className={style.species}>{props.species}</h2>
               </div>

               <div className={style.containerGender}>
                  <h2 className={style.gender}>{props.gender}</h2>
               </div>
            </div>

            {pathname=='/home' &&
            <button className={style.cros} onClick={()=>{props.onClose(props.id)}}>❌</button>}
            
            {isFav?
            (<button className={style.heart} onClick={handleFavorite}>❤️</button>) 
            :
            (<button className={style.heart} onClick={handleFavorite}>🤍</button>)}
      </div>

   );
}