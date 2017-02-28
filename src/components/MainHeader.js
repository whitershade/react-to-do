import React, { PropTypes, Component } from 'react'
import AppBar from 'material-ui/AppBar';

export default class AppBarExampleIcon extends Component {
  static PropTypes = {
    isOpen: PropTypes.bool.isRequired,
  }

  handleToggle() {
    const { LeftMenuActions: { changeLeftMenuState }, isOpen } = this.props;
    changeLeftMenuState(!isOpen);
  }

  render() {
    return (
      <AppBar
        title='Title'
        iconClassNameRight='muidocs-icon-navigation-expand-more'
        onLeftIconButtonTouchTap={ ::this.handleToggle }
      />
    );
  }
}
