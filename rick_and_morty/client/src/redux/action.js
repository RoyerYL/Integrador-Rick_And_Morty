export const ADD_FAV="ADD_FAV"
export const REMOVE_FAV="REMOVE_FAv"
export const FILTER="FILTER"
export const ORDER="ORDER"


export function add_fav(prop) {
    return {
      type: ADD_FAV,
      payload:prop,
    }
  };
export function remove_fav(id) {
      return {
        type: REMOVE_FAV,
        payload:id,
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