import React, { PropTypes, Component } from 'react'
import { Link }                        from 'react-router'

import MenuItem                        from 'material-ui/MenuItem'


export default class AsideMenuLink extends Component {
  static PropTypes = {
    link: PropTypes.string.isRequired,
    classLink: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
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
