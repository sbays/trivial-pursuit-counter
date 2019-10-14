import * as React from "react";
import styled from "styled-components";
import CategoryButton from "./CategoryButton";

//Cheese Wheel and Pieces
const CheesePiece = styled("div")<any>`
  background: "pink";
`;
const categories = ["blue", "pink", "yellow", "brown", "green", "orange"];
class CheeseContainer extends React.Component<any, any> {
  render(): React.ReactNode {
    let cheeses: any = [];
    this.props.correct.forEach((color: string) => {
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
              {categories.map(category => (
                <CategoryButton
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
