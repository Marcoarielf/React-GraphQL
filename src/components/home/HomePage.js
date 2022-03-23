import React from "react";
import Card from "../card/Card";
import styles from "./home.module.css";
import { connect } from "react-redux";

function Home({ chars }) {
  function renderCharacter() {
    let char = chars[2];
    console.log("chars");
    console.log(chars);
    return <Card {...char} />;
  }

  return (
    <div className={styles.container}>
      <h2>Personajes de Rick y Morty</h2>
      <div>{chars && renderCharacter()}</div>
    </div>
  );
}

function mapState(state) {
  return {
    chars: state.characters.array,
  };
}

export default connect(mapState)(Home);
