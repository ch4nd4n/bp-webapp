import React from 'react';
import PropTypes from 'prop-types';

export default class LoginForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleForm}>
        <div className="frm-item"><input placeholder="Enter Username" onChange={this.props.handleInputChange} name="username" required /></div>
        <div className="frm-item"><input placeholder="Password" type="password" onChange={this.props.handleInputChange} name="password" /></div>
        <div className="frm-item"><button>Login</button></div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  handleForm: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
};
