import React from "react";

class Toggling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: true,
    };
  }
  toggle = () => {
    console.log("This==>", this); //
    this.setState({
      on: false,
    });
  };
  render() {
    return (
      <button onClick={this.toggle}>{this.state.on ? "ON" : "OFF"}</button>
    );
  }
}
export default Toggling;
