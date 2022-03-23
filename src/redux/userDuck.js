import { logginWithGoogle } from "../firebase";
// constantes
let initialState = {
  loggedIn: false,
  fetching: false,
};
let LOGIN = "LOGIN";
let LOGIN_SUCCESS = "LOGIN_SUCCES";
let LOGIN_ERROR = "LOGIN_ERROR";

// reducer: va a estar escuchando que hagas una acción
// Al hacer la acción la ejecuta y cambia el state.
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, fetching: true };
    case LOGIN_SUCCESS:
      return { ...state, fetching: false, ...action.payload };
    case LOGIN_ERROR:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
}

// aux
function saveStorage(storage) {
  localStorage.storage = JSON.stringify(storage);
}

//acciones
export const doLoginAction = () => (dispatch, getState) => {
  dispatch({
    type: LOGIN,
  });
  return logginWithGoogle()
    .then((user) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { ...user },
      });
      saveStorage(getState);
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: LOGIN_ERROR,
        payload: err.message,
      });
    });
};
