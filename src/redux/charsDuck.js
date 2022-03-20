import axios from "axios";

// constantes

let initialState = {
  fetching: false,
  array: [],
  currentChar: {},
};
let URL = "https://rickandmortyapi.com/api/character";
let GET_CHARACTER = "GET_CHARACTER";
let GET_CHARACTER_SUCCESS = "GET_CHARACTER_SUCCESS";
let GET_CHARACTER_ERROR = "GET_CHARACTER_ERROR";

// reducer: va a estar escuchando que hagas una acción
// Al hacer la acción la ejecuta y cambia el state.
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTER:
    case GET_CHARACTER_SUCCESS:
      return { ...state, array: action.payload };
    case GET_CHARACTER_ERROR:
    default:
      return state;
  }
}

//acciones (thunk - promises)
export const getCharactersAction = () => (dispatch, getState) => {
  // function that returns a funnction
  return axios.get(URL).then((res) => {
    dispatch({
      type: GET_CHARACTER_SUCCESS,
      payload: res.data.results,
    });
  });
};
