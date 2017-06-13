import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
  render() {
    return (
      <nav>
        <h1>The App</h1>
        {this.props.user && <div>{this.props.user.username}</div>}
      </nav>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object.isRequired
};

