import { useDispatch } from 'react-redux';
import style from './style/Cards.module.css'
import Card from './Card';

import { Link } from 'react-router-dom';
import { add_fav, remove_fav } from '../redux/action';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
export default function Favorites(props) {

   const myFavorites=useSelector((state)=>state.myFavorites);

    
   return (<div className={style.cards}>
         {myFavorites.map((charcter,index)=>{return(
                <Card 
                
                    key={charcter.id} //importante añdir unna KEY
                    id={charcter.id}
                    name={charcter.name} 
                    status={charcter.status}
                    species={charcter.species} 
                    gender={charcter.gender} 
                    origin={charcter.origin.name} 
                    image={charcter.image} 
                    />
            )})}
      </div>
   );
}
