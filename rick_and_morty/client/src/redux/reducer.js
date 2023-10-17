import { ADD_FAV, FILTER, REMOVE_FAV } from "./action"

const initialState = {
    myFavorites: [],
    allCharacters:[],
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {

      case ADD_FAV:

      let copy=[...state.allCharacters,action.payload]

      return {
          ...state,
          allCharacters:copy,
          myFavorites:copy
        }

      case REMOVE_FAV:
          return {...state,
            myFavorites:state.myFavorites.filter(
              (fav)=>fav.id!==parseInt(action.payload)
            )}
      case "FILTER":

        if (action.payload === "ALL") {
          return {
            ...state,
            myFavorites: state.allCharacters,
          };
        } else {
          let copy3 = state.allCharacters.filter((char) => {
            return char.gender === action.payload;
          });
          return {
            ...state,
            myFavorites: copy3,
          };
        }

        case "ORDER":

          let orderedCharacters;
          if (action.payload === "A") {
            orderedCharacters = state.allCharacters.sort((a, b) => a.id - b.id);
          } else {
            orderedCharacters = state.allCharacters.sort((a, b) => b.id - a.id);
          }
          return {
            ...state,
            myFavorites: orderedCharacters,
          };
    
        default:
          return {
            ...state,
          };
            
        }

  }
  