import style from './style/Home.module.css'

import Cards from "./models/Cards";


export default function Home(props) {
    return (
       <>   
            <img className={style.img} src="../../img/Rick-And-Morty-Logo.png" alt="" />
            <Cards characters={props.characters} onClose={props.onClose}/>
       </>
    )
}
 