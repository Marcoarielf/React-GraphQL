import React from "react";
import Card from "../card/Card";
import styles from "./home.module.css";
import { connect } from "react-redux";
import {
  removeCharacterAction,
  likeCharacterAction,
} from "../../redux/charsDuck";

function Home({ chars, removeCharacterAction, likeCharacterAction }) {
  function renderCharacter() {
    let char = chars[0];
    console.log("chars");
    console.log(chars);
    return (
      <Card leftClick={nextCharacter} rightClick={addToFavorites} {...char} />
    );
  }

  function nextCharacter() {
    removeCharacterAction();
  }

  function addToFavorites() {
    likeCharacterAction();
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

export default connect(mapState, {
  removeCharacterAction,
  likeCharacterAction,
})(Home);
