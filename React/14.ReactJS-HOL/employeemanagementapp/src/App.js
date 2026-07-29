import React, { Component } from "react";
import EmployeeList from "./EmployeeList";
import ThemeContext from "./ThemeContext";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "light"
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === "light" ? "dark" : "light"
    }));
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <div>
          <h1>Employee Management Application</h1>

          <p>Current Theme: {this.state.theme}</p>

          <button onClick={this.toggleTheme}>
            Change Theme
          </button>

          <EmployeeList />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;