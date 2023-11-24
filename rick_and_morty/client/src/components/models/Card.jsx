import { useDispatch } from 'react-redux';
import style from '../style/Card.module.css'
import { Link, useLocation } from 'react-router-dom';
import { add_fav, remove_fav } from '../../redux/action';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HOME_PATH } from '../../paths/paths';
export default function Card(props) {
const {pathname} =useLocation();

const myFavorites=useSelector((state)=>state.myFavorites)
const dispatch = useDispatch();


const [isFav,setIsFav]=useState(false)


const { id ,
   name,
   origin,
   status,
   image,
   species,
   gender}  =props

 
 useEffect(() => {

    myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);       
      }
   });
 }, [myFavorites]);

 const handleFavorite = () => {
   isFav ? dispatch(remove_fav(props.id)) : dispatch(add_fav({id,name,origin:origin.name,status,image,species,gender}  ));
   setIsFav(!isFav);
  

};


 

   return (
      <>
      <div className={`${style.card} ${props.clase}`} >
         <div className={style.containerName}>
            <h2 className={style.name}>{props.name}</h2>
         </div>

         <div className={style.perfil}>

            
            <img className={props.status==='Alive'?style.alive:style.dead} src={props.image} alt='' />   
            <Link to={`/detail/${props.id}`}>      
               <button className={style.datailButton}>Detail</button>
            </Link>
            <div className={style.containerStatus}>
               <h2 className={style.status}>{props.status}</h2>
            </div>
         </div>

         <div className={style.containerOrigin}>
            <h2 className={style.origin}>{props.origin?.name || origin.name}</h2>
         </div>
 
            <div className={style.info}>
               <div className={style.containerSpecies}>
                  <h2 className={style.species}>{props.species}</h2>
               </div>

               <div className={style.containerGender}>
                  <h2 className={style.gender}>{props.gender}</h2>
               </div>
            </div>

            {pathname===HOME_PATH ?
            <button className={style.crosButton} onClick={()=>{props.onClose(props.id)}}>❌</button>:
            <p className={style.cros} onClick={()=>{props.onClose(props.id)}}>{props.id}</p>
            }
            
            {isFav?
            (<button className={`${style.heart} activarLBox`}onClick={handleFavorite} >❤️</button>) 
            :
            (<button className={style.heart} onClick={handleFavorite}>🤍</button>)}
            
      </div>
         
      </>

   );
}