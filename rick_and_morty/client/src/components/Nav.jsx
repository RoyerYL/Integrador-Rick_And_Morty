import style from './style/Nav.module.css'
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar'
export default function Card(props) {
    return (
      
       <div className={style.nav}>
         <div className={style.navegacionButtons}>
         <Link to={"/home"}>
         <button className={style.botones}>Home</button>
         </Link>

         <Link to={"/about"}>
         <button >About</button>            
         </Link>

         <Link to={"/"}>
         <button>Logout</button>
         </Link>

         <Link to={"/favorites"}>
         <button>My favorites</button>
         </Link>
      

         <Link to={"/packs"}>
         <button>Packs</button>
         </Link>

         </div>
         
         <SearchBar onSearch={props.onSearch} ></SearchBar>
       </div>
    );
 }
 