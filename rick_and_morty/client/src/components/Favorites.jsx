import { useDispatch } from 'react-redux';
import style from './style/Cards.module.css'
import Card from './Card';

import { add_fav, filterCards, orderCards, remove_fav } from '../redux/action';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Cards from './Cards';
export default function Favorites(props) {
  //redux
  const myFavorites=useSelector((state)=>state.myFavorites);
  const dispatch = useDispatch();

  const [aux, setAux] = useState(false);

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
      
      <div className={style.filter}>
        <div className={style.containerAsc}>
          <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
        <p className={style.flechaAsc}> 🡣</p>
        </div>

        <div className={style.containerAll}>
        <p className={style.flechaAll}> 🡣</p>
        <select onChange={handleFilter}>
          <option value="ALL">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        </div>
      </div>

      <div>
        <Cards characters={myFavorites}  />
      </div>
         
    </div>
   </div>

   );
}
