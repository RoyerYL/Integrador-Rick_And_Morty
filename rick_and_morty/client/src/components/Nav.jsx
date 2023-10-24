import style from './style/Nav.module.css'
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar'
export default function Card(props) {
    return (
      
       <div className={style.nav}>
         <div className={style.navegacionButtons}>
               
            <Link to={"/"}>
            <button className={style.iconoButton} title='Logout'>🚪</button>
            </Link>

            <Link to={"/home"}>
            <button className={style.botones} title='Home'>🏠 Home</button>
            </Link>

            <Link to={"/favorites"}>
            <button>❤️ Mis favoritos</button>
            </Link>

            <Link to={"/packs"}>
            <button>🎴 Packs</button>
            </Link>

            <Link to={"/about"}>
            <button className={style.iconoButton} title='About'>ℹ</button>            
            </Link>
            
         </div>
         
         <SearchBar onSearch={props.onSearch} ></SearchBar>
       </div>
    );
 }
 