import React, { Component } from "react";
import Styled from "styled-components";
import CategoryButton from "./CategoryButton";

//Cheese Wheel and Pieces
const CheesePiece = Styled.div`
`;
const categories = ["blue", "pink", "yellow", "brown", "green", "orange"];
class CheeseContainer extends Component {
  render() {
    let cheeses = [];
    this.props.correct.forEach(color => {
      cheeses.push(<div className={"piece " + color}></div>);
    });
    return (
      <CheesePiece>
        <div className="player-panel-container">
          <div className="player-panel">
            <div className="cheese-container">
              <div className="cheese">{cheeses}</div>
            </div>
          </div>
          <div>
            <ul className="category-buttons">
              {categories.map((category, i) => (
                <CategoryButton
                  key={i}
                  className="button"
                  onChangeValue={this.props.onChangeValue}
                  color={category}
                ></CategoryButton>
              ))}
            </ul>
          </div>
        </div>
      </CheesePiece>
    );
  }
}

export default CheeseContainer;
