import { ADD_FAV, FILTER, REMOVE_FAV } from "./action"

const initialState = {
    myFavorites: [],
    allCharacters:[]
  }
  
export default (state = initialState, {type,payload}) => {
  switch (type) {
    case ADD_FAV:
        return { ...state, myFavorites: payload, allCharacters: payload };

    case REMOVE_FAV:
      return { ...state, myFavorites: payload ,allCharacters:payload};
      
    case "FILTER":

      if (payload === "ALL") {
          return {
            ...state,
            myFavorites: state.allCharacters,
          };
        } else {
          let copy3 = state.allCharacters.filter((char) => {
            return char.gender === payload;
          });
          return {
            ...state,
            myFavorites: copy3,
          };
        }

    case "ORDER":

      let orderedCharacters;
      if (payload === "A") {
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
  