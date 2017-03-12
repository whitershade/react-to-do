import React, { PropTypes, Component } from 'react'

import AppBar from 'material-ui/AppBar';

import { rootPath, rootName, deletedPath, deletedName } from '../constants/Routes'


export default class MainHeader extends Component {
  static PropTypes = {
    isOpen: PropTypes.bool.isRequired,
  }

  handleToggle() {
    const { AsideMenuActions: { changeLeftMenuState }, isOpen } = this.props;
    changeLeftMenuState(!isOpen);
  }

  getName() {
    switch (this.props.routing.pathname) {
      case rootPath:
          return rootName
      case deletedPath:
          return deletedName
      default:
          return rootName
    }
  }

  render() {
    return (
      <AppBar
        title= { this.getName() }
        iconClassNameRight='muidocs-icon-navigation-expand-more'
        onLeftIconButtonTouchTap={ ::this.handleToggle }
      />
    );
  }
}
