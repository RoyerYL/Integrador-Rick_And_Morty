import { ADD_FAV, REMOVE_FAV } from "./action"

const initialState = {
    myFavorites: [],
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case ADD_FAV:
        console.log("Añadiendo")
        return {...state,myFavorites:[...state.myFavorites,action.payload]}
      case REMOVE_FAV:
          return {...state,
            myFavorites:state.myFavorites.filter(
              (fav)=>fav.id!==parseInt(action.payload)
            )}
      default:
        return {...state}
    }
  }
  