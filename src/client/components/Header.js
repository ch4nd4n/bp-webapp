import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Boilerplate</h1>
        <nav>
          {this.props.user && <div>{this.props.user.username}</div>}
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object.isRequired
};

