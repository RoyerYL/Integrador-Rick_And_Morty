import { useDispatch } from 'react-redux';
import style from './style/Cards.module.css'
import Card from './Card';

import { Link } from 'react-router-dom';
import { add_fav, filterCards, orderCards, remove_fav } from '../redux/action';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Cards from './Cards';
export default function Favorites(props) {

   const myFavorites=useSelector((state)=>state.myFavorites);
   const [aux, setAux] = useState(false);
   const dispatch = useDispatch();

   const handleOrder = (e) => {
      dispatch(orderCards(e.target.value));
      setAux(!aux);
    };
  
    const handleFilter = (e) => {
      dispatch(filterCards(e.target.value));
    };

   return (
  <div className={style.containerFavorites}>
   <div className={style.myFavorites}>
      
      <div className=''>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select onChange={handleFilter}>
          <option value="ALL">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div>
        <Cards characters={myFavorites}  />
      </div>
         
    </div>
   </div>

   );
}
