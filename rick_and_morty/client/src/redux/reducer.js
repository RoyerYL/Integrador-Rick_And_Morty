import { ADD_FAV, FILTER, REMOVE_FAV } from "./action"

const initialState = {
    myFavorites: [],
    allCharacters:[]
  }
  
  export default (state = initialState, {type,payload}) => {
    switch (type) {

      case "ADD_FAV":
      // eslint-disable-next-line no-case-declarations
      let copy1 = state.myFavorites;
      
        
      copy1.push(payload);
      return {
        ...state,
        myFavorites: copy1,
        allCharacters:copy1
      };

      case REMOVE_FAV:

      // eslint-disable-next-line no-case-declarations
      let copy2 = state.myFavorites.filter((char) => {
        return char.id !== Number(payload);
      });
      return{
        ...state,
        myFavorites: copy2,
        allCharacters:copy2
      };
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
  