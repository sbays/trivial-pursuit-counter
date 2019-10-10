import React, { Component } from "react";

class CategoryButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this.props.color);
    this.props.onChangeValue(this.props.color);
  }
  render() {
    return (
      <li
        className={`category-item ${this.props.color}`}
        data-color={this.props.color}
        onClick={this.handleClick}
      ></li>
    );
  }
}

export default CategoryButton;
