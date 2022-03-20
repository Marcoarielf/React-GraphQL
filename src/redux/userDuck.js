// constantes
let initialState = {
  loggedIn: false,
};
let LOGIN = "LOGIN";

// reducer: va a estar escuchando que hagas una acción
// Al hacer la acción la ejecuta y cambia el state.
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
    // return something
    default:
      return state;
  }
}

//acciones
