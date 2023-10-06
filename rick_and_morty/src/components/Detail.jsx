import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './style/Detail.module.css'


export default function  Detail() {

    const [character,setCharacter] = useState({})
    const{id} = useParams()

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (

    <div className={style.detail}>
      
      <div>

      </div>
        <div className={style.divImg}>
            <img className={style.imagen} src={character.image} alt='' />   
            <h2 className={style.name}>{character.name}</h2>
         </div>

         <div >
            <h2 >{character.origin?.name}</h2>   
            <h2>{character.status}</h2>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
         </div>
         <div>
            
         </div>
    </div>
    
 )
}
