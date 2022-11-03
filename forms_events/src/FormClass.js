import React, { Component } from "react";

class FormClass extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.name = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
    this.cpassword = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();

    const name = this.name.current.value;
    const email = this.email.current.value;
    const password = this.password.current.value;
    const cpassword = this.cpassword.current.value;

    if (name === "" || email === "" || password === "")
      alert("Please Enter all the details.");
    else if (cpassword === password)
      alert(
        "You Entered the following data: \nName: " + name + "\nEmail: " + email
      );
    else alert("Incorrect Password");
  }
  render() {
    return (
      <div>
        <form>
          <label>Name: </label>
          <input type="text" ref={this.name} required />
          <br />
          <label>Email: </label>
          <input type="email" ref={this.email} required />
          <br />
          <label>Password: </label>
          <input type="password" ref={this.password} required />
          <br />
          <label>Confirm Password: </label>
          <input type="password" ref={this.cpassword} required />
          <br />
          <button onClick={this.handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FormClass;
