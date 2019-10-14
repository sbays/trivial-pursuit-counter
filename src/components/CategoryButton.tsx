import * as React from "react";

class CategoryButton extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(): void {
    console.log(this.props.color);
    this.props.onChangeValue(this.props.color);
  }
  render(): React.ReactNode {
    return (
      <>
        <li
          className={`category-item ${this.props.color}`}
          data-color={this.props.color}
          onClick={this.handleClick}
        ></li>
      </>
    );
  }
}

export default CategoryButton;
