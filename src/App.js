import React from "react";
import Descriptor from "./components/Descriptor";
import "./App.css";

class App extends React.Component {
  state = {
    counter: 0,
  };
  increaseCounter = () => {
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => console.log(this.state.counter)
    );
    //
  };

  render() {
    var username = "abcd";

    return (
      <div className="App">
        <h1>{username}</h1>
        <button onClick={this.increaseCounter} className="plus-button">
          +
        </button>
        <p>{this.state.counter}</p>
        <Descriptor />
      </div>
    );
  }
}

export default App;
