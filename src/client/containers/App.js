import React from 'react';
import Login from './login/Login';
import Header from '../components/Header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, user: {} };
    this.handleLoggedIn = this.handleLoggedIn.bind(this);
  }
  handleLoggedIn(isLoggedIn, user) {
    this.setState({ isLoggedIn, user });
  }
  render() {
    return (
      <div>
        <Header user={this.state.user} />
        <Login handleLoggedIn={this.handleLoggedIn} />
      </div>
    );
  }
}
