import style from '../style/Nav.module.css'
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar'
import { ABOUT_PATH, CATALOGO_PATH, FAVORITES_PATH, HOME_PATH, LOGIN_PATH, PACKS_PATH } from '../../paths/paths';
export default function Card(props) {
    return (
      
       <div className={style.nav}>
         <div className={style.navegacionButtons}>
               
            <Link to={LOGIN_PATH}>
            <button className={style.iconoButton} title='Logout'>🚪</button>
            </Link>

            <Link to={HOME_PATH}>
            <button className={style.botones} title='Home'>🏠 Home</button>
            </Link>

            <Link to={FAVORITES_PATH}>
            <button>❤️ Mis favoritos</button>
            </Link>

            <Link to={PACKS_PATH}>
            <button>🎴 Packs</button>
            </Link>

            <Link to={CATALOGO_PATH}>
            <button title='Catalogo'>📖</button>
            </Link>

            <Link to={ABOUT_PATH}>
            <button className={style.iconoButton} title='About'>ℹ</button>            
            </Link>
            
         </div>
         
         <SearchBar onSearch={props.onSearch} ></SearchBar>
       </div>
    );
 }
 