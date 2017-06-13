import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.state = {
      loginFrm: {}
    };
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const loginFrm = this.state.loginFrm;
    loginFrm[name] = value;
    this.setState({ loginFrm });
  }

  handleForm(event) {
    event.preventDefault();
    axios.post('/api/users', this.state.company)
      .then((response) => {
        this.props.handleLoggedIn(true, response.data.user);
        return this.state;
      })
      .catch(() => {
        this.setState({ loggedIn: false });
      });
  }

  render() {
    return (
      <LoginForm handleForm={this.handleForm} handleInputChange={this.handleInputChange} />
    );
  }
}

Login.propTypes = {
  handleLoggedIn: PropTypes.func.isRequired
};
