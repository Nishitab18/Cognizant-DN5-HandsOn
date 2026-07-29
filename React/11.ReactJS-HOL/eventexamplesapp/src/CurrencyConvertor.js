import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      currency: "Euro"
    };
  }

  handleChange = (event) => {
    this.setState({
      amount: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const euro = this.state.amount / 90;

    alert(
      "Converting to Euro Amount is " + euro.toFixed(2)
    );
  };

  render() {
    return (
      <div>
        <h1>Currency Convertor!!!</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            Amount:
            <input
              type="number"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </label>

          <br /><br />

          <label>
            Currency:
            <textarea value={this.state.currency} readOnly />
          </label>

          <br /><br />

          <button type="submit">Convert</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;