import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));

    this.sayHello();
  };

  decrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1
    }));
  };

  sayHello = () => {
    alert("Hello! Member");
  };

  sayWelcome = (message) => {
    alert(message);
  };

  handleClick = (event) => {
    alert("I was clicked");
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>

        <button onClick={this.increment}>Increment</button>
        <br />

        <button onClick={this.decrement}>Decrement</button>

        <br /><br />

        <button onClick={() => this.sayWelcome("welcome")}>
          Say Welcome
        </button>

        <br /><br />

        <button onClick={this.handleClick}>Click on me</button>

        <br /><br />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;