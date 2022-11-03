import "./styles.css";

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    console.log("Constructor!");
    this.state = {
      name: "Shivaan",
      age: 20
    };
  }

  componentDidMount() {
    if (this.state.name === "Shivaan") this.setState({ name: "Shivaan Shah" });
    console.log("Component Did Mount!");
  }

  componentDidUpdate() {
    if (this.state.age === 20) this.setState({ age: 21 });
    console.log("Component Did Update!");
  }

  componentWillUnmount() {
    console.log("Component Will Unmout!");
  }

  render() {
    console.log("Render Method!");
    return (
      <div>
        <h1>React Component Life Cycle</h1>
        <h3>
          Each component in React has a lifecycle which you can monitor and
          manipulate during its four main phases.
        </h3>
        <p>The four phases are:</p>
        <ul>
          <li>Initialization / Birth</li>
          <li>Mounting</li>
          <li>Updating</li>
          <li>Unmounting</li>
        </ul>
      </div>
    );
  }
}

export default App;
