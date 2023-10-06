export const ADD_FAV="ADD_FAV"
export const REMOVE_FAV="REMOVE_FAv"

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

