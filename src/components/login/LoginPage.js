import React from "react";
import styles from "./login.module.css";
import { connect } from "react-redux";
import { doLoginAction } from "../../redux/userDuck";

function LoginPage({ fetching, doLoginAction }) {
  function doLogin() {
    doLoginAction();
  }

  if (fetching) return <h2>loading..</h2>;
  return (
    <div className={styles.container}>
      <h1>Inicia Sesión con Google</h1>
      <h1>Cierra tu sesión</h1>
      <button onClick={doLogin}>Iniciar</button>
      <button>Cerrar Sesión</button>
    </div>
  );
}

function mapState({ user: fetching }) {
  return {
    fetching,
  };
}

export default connect(mapState, { doLoginAction })(LoginPage);
