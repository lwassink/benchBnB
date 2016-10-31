import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.loggedIn) this.props.router.push("/");
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.proccessForm(this.state);
  }

  update(key) {
    return event => this.setState({ [key]: event.target.value });
  }

  render() {
    return(
      <form >
        <ul>
          {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <h2>{ this.props.formType === "signup" ? "Sign up" : "Log in" }</h2>
        <br />
        Username:
        <input type="text" placeholder="username" value={this.state.username}
          onChange={this.update("username")}/>
        <br />
        Password:
        <input type="password" value={this.state.password}
          onChange={this.update("password")}/>
        <br />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default SessionForm;

