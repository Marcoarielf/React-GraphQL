import axios from "axios";

// constants

let initialState = {
  fetching: false,
  array: [],
  currentChar: {},
};
let URL = "https://rickandmortyapi.com/api/character";
let GET_CHARACTER = "GET_CHARACTER";
let GET_CHARACTER_SUCCESS = "GET_CHARACTER_SUCCESS";
let GET_CHARACTER_ERROR = "GET_CHARACTER_ERROR";
let REMOVE_CHARACTER = "REMOVE_CHARACTER";

// reducer: va a estar escuchando que hagas una acción
// Al hacer la acción la ejecuta y cambia el state.
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTER:
      return { ...state, array: action.payload, fetching: true };
    case GET_CHARACTER_SUCCESS:
      return { ...state, array: action.payload, fetching: false };
    case GET_CHARACTER_ERROR:
      return { ...state, error: action.payload, fetching: false };
    case REMOVE_CHARACTER:
      return { ...state, array: action.payload };
    default:
      return state;
  }
}

//acciones (thunk - promises)

export const removeCharacterAction = () => (dispatch, getState) => {
  let { array } = getState().characters;
  array.shift();
  dispatch({
    type: REMOVE_CHARACTER,
    payload: [...array], // lo mando así para que no sea una copia.
  });
};

export const getCharactersAction = () => (dispatch, getState) => {
  dispatch({
    type: GET_CHARACTER,
  });
  // function that returns a funnction
  return axios
    .get(URL)
    .then((res) => {
      // despacho la acción que consigue chars exitosamente
      // y se los guarda en el payload
      dispatch({
        type: GET_CHARACTER_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((err) => {
      console.log("err");
      console.log(err);
      dispatch({
        type: GET_CHARACTER_ERROR,
        payload: err.response.message,
      });
    });
};
