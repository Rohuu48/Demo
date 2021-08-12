import React from "react";
import ItemCard from "./components/ItemCard";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      counter: 0,
    };
    this.username = "abcd";
    this.products = [
      {
        name: "Bata",
        price: 2500,
      },
      {
        name: "Woodlands",
        price: 5000,
      },
      {
        name: "Sparx",
        price: 1000,
      },
      {
        name: "Tommy Hilfeigher",
        price: 10000,
      },
    ];
  }

  increaseCounter = () => {
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => console.log(this.state.counter)
    );
    //
  };

  componentDidMount() {
    console.log("mounted");
  }

  componentDidUpdate() {
    console.log(this.state, "updated");
  }

  componentWillUnmount() {
    console.log("unmounted");
  }

  render() {
    console.log("render method");

    return (
      <div className="App">
        <h1>{this.username}</h1>
        <button onClick={this.increaseCounter} className="plus-button">
          +
        </button>
        <p>{this.state.counter}</p>
        {this.products.map((item, index) => {
          return <ItemCard key={index} name={item.name} price={item.price} />;
        })}
      </div>
    );
  }
}

export default App;
