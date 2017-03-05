import React, { PropTypes, Component } from 'react'
import { Link }                        from 'react-router'

import MenuItem                        from 'material-ui/MenuItem'


export default class LeftMenu extends Component {
  static PropTypes = {
    isOpen: PropTypes.bool.isRequired,
    link: PropTypes.string.isRequired
  }

  render() {
    const { link, classLink, text } = this.props
    return (
      <Link to= { link }
            className={ classLink }
      >
            <MenuItem>{ text }</MenuItem>
      </Link>
    );
  }
}
