import { useDispatch } from 'react-redux';
import style from './style/Cards.module.css'

import { filterCards, orderCards } from '../redux/action';

import { useSelector } from 'react-redux';
import Cards from './models/Cards';
export default function Favorites(props) {

  /***** REDUX *****/
  const myFavorites=useSelector((state)=>state.myFavorites);
  const dispatch = useDispatch();

  const handleOrder = (e) => {
      dispatch(orderCards(e.target.value));

    };
  
  const handleFilter = (e) => {
      dispatch(filterCards(e.target.value));
    };

  /***** FAVORITES *****/  
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
