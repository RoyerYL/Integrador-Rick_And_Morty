import { useState } from 'react';
import style from '../style/SearchBar.module.css'


export default function SearchBar(props) {

const{onSearch,random}=props;
const[id,setId]=useState("")//el id tiene que estar seteado en algun lugar como estado

const handleChange=(evento)=>{
//1-Capturar la data del input
//2-Guardar esa data en el estado
   setId(evento.target.value);
}

   return (
      <div className={style.searchBar}>
         <input className={style.input} type='search' onChange={handleChange} />
         <button title='Buscar' className={style.boton} onClick={()=>onSearch(id)}>🔎</button>
         <button title='Aleatorio' className={style.boton} onClick={()=>onSearch(Math.round(Math.random()*826))}>🔀</button>
      </div>
   );
}
