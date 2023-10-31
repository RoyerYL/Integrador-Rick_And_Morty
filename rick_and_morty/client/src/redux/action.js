import { ADD_FAV, FILTER, REMOVE_FAV,ORDER } from "./acionTypes"
import axios from "axios";



export const add_fav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return (dispatch) => {
     axios.post(endpoint, character).then(({ data }) => {
        return dispatch({
           type: ADD_FAV,
           payload: data,
        });
     });
  };
};

export const remove_fav = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return (dispatch) => {
     axios.delete(endpoint).then(({ data }) => {
      return dispatch({
           type:REMOVE_FAV,
           payload: data,
     });
     });
  };
};

export const filterCards = (gender) => {
  return{
    type:FILTER,
    payload:gender,
    
  }
}
export const orderCards = (order) => {
  return{
    type:ORDER,
    payload:order,

  }
}