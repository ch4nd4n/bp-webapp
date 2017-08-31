import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
  render() {
    return (
      <nav>
        {this.props.user && <div>{this.props.user.username}</div>}
      </nav>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object.isRequired
};

