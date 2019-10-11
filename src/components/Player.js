import React, { Component } from "react";
import CheeseContainer from "./CheeseContainer";
import Styled from "styled-components";

const PlayerStyles = Styled.div`
    width: 25%;
    min-width: 49%;
    padding: 15px 0;
`;

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: []
    };
    this.onChangeValue = this.onChangeValue.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
  }
  onChangeValue(categoryColor) {
    console.log({ categoryColor });
    console.log(this.props);
    this.setState((prevState, props) => {
      if (prevState.correct.indexOf(categoryColor) >= 0) {
        return {
          correct: [
            ...prevState.correct.filter(category => category !== categoryColor)
          ]
        };
      } else {
        return {
          correct: [...prevState.correct, categoryColor]
        };
      }
    });
  }
  removePlayer() {
    this.props.removePlayer(this.props.name);
  }
  render() {
    return (
      <PlayerStyles>
        <h2>Name: {this.props.name}</h2>
        <CheeseContainer
          key={this.props.name}
          onChangeValue={this.onChangeValue}
          correct={this.state.correct}
        ></CheeseContainer>
        <button className="button" onClick={this.removePlayer}>
          Remove Player
        </button>
      </PlayerStyles>
    );
  }
}

export default Player;
