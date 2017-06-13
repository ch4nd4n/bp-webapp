import React from 'react';
import PropTypes from 'prop-types';

export default class LoginForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleForm}>
        <div><input placeholder="Enter Username" onChange={this.props.handleInputChange} name="username" required /></div>
        <div><input placeholder="Enter Company Name" onChange={this.props.handleInputChange} name="companyName" /></div>
        <div><input placeholder="Enter Postal Address" onChange={this.props.handleInputChange} name="postalAddress" /></div>
        <div><input placeholder="Password" type="password" onChange={this.props.handleInputChange} name="password" /></div>
        <div><button>Login</button></div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  handleForm: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
};
