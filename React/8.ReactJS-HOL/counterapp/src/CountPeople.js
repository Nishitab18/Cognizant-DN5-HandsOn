import React, { Component } from "react";

class CountPeople extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entrycount: 0,
      exitcount: 0
    };

    this.updateEntry = this.updateEntry.bind(this);
    this.updateExit = this.updateExit.bind(this);
  }

  updateEntry() {
    this.setState((prevState) => ({
      entrycount: prevState.entrycount + 1
    }));
  }

  updateExit() {
    this.setState((prevState) => ({
      exitcount: prevState.exitcount + 1
    }));
  }

  render() {
    return (
      <div style={{ marginTop: "250px", textAlign: "center" }}>
        <button onClick={this.updateEntry}>Login</button>
        {" "}
        {this.state.entrycount} People Entered!!!
        
        <span style={{ marginLeft: "300px" }}>
          <button onClick={this.updateExit}>Exit</button>
          {" "}
          {this.state.exitcount} People Left!!!
        </span>
      </div>
    );
  }
}

export default CountPeople;