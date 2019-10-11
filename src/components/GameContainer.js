import React, { Component } from "react";
import CheeseContainer from "./CheeseContainer";
import Player from "./Player";
import Styled from "styled-components";

const GameStyles = Styled.div`
    .players-wrapper {
        display: flex;
        flex-direction: row;
    }
    .new-player-form {
        width: 100%;
        padding-top: 20px;
        padding-bottom: 20px;
        input {
            margin-top: 15px;
            font-size: 2rem;
            padding: 0.5rem;
            border-radius: 3px;
        }
        button{
            margin-top: 15px;
            font-size: 1.6rem;
            margin-left: 20px;
        } 
    }
`;

const DiceStyles = Styled.div`
    padding-top: 20px;
    .dice {
        dislay: block;
        font-size: 3rem;
    }
`;

const DiceButton = Styled.button`
    margin-top: 20px;
    font-size: 2rem;
    border-radius: 3px;
    border: 1px solid #1b3861;
    padding: 10px;
    color: #1b3861;
    background: #ecba1d;
`;

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: ["simon", "milo"],
      newName: "",
      diceValue: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
  }
  handleChange(event) {
    this.setState({ newName: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState((prevState, props) => {
      return {
        players: [...prevState.players, this.state.newName],
        newName: ""
      };
    });
  }
  removePlayer(name) {
    if (this.state.players.indexOf(name) >= 0 ) {
      this.setState((prevState, props) => {
        return {
          players: prevState.players.filter(player => player !== name)
        };
      });
    }
  }
  getRandomNumber = () => {
    let number = Number(Math.floor(Math.random() * 6) + 1);
    if (number === this.state.diceValue) {
      return this.getRandomNumber();
    } else {
      return number;
    }
  };
  rollDie = () => {
    const diceValue = this.getRandomNumber();

    this.setState({
      diceValue
    });
  };

  render() {
    return (
      <GameStyles>
        <div className="new-player-form">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">
              <input
                className="player-name-input"
                name="name"
                value={this.state.newName}
                onChange={this.handleChange}
                type="text"
              />
            </label>
            <button className="button" type="submit">
              Add Player
            </button>
          </form>
        </div>
        <div className="players-wrapper">
          {this.state.players.map(player => (
            <Player removePlayer={this.removePlayer} name={player}></Player>
          ))}
        </div>
        <DiceButton className="button" onClick={this.rollDie}>
          Roll Die
        </DiceButton>
        <DiceStyles>
          <div
            className={`dice dice-${this.state.diceValue}`}
            title={`Dice ${this.state.diceValue}`}
          ></div>
        </DiceStyles>
      </GameStyles>
    );
  }
}

export default GameContainer;
