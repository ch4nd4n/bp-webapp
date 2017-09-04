import React from 'react';
import Login from './login/Login';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, user: {} };
    this.handleLoggedIn = this.handleLoggedIn.bind(this);
  }
  componentWillMount() {
    this.startTimer();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  setLocation() {
    if ('geolocation' in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition((position) => {
        fetch('/api/users/geolocation?lat=' + position.coords.latitude + '&lng=' + position.coords.longitude);
        this.startTimer();
      });
    } else {
      /* geolocation IS NOT available */
    }
  }
  handleLoggedIn(isLoggedIn, user) {
    this.setState({ isLoggedIn, user });
  }
  startTimer() {
    clearInterval(this.timer);
    // this.timer = setTimeout(this.setLocation.bind(this), 5000);
  }
  render() {
    return (
      <div>
        <Header user={this.state.user} />
        <content>
          {this.state.isLoggedIn === true && <div>Logged in as {this.state.user.username}</div>}
          { this.state.isLoggedIn === false && <Login handleLoggedIn={this.handleLoggedIn} />}
        </content>
        <Footer />
      </div>
    );
  }
}
