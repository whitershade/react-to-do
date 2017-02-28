import React, { PropTypes, Component } from 'react'

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

export default class LeftMenu extends Component {
  static PropTypes = {
    isOpen: PropTypes.bool.isRequired,
  }

  handleToggle() {
    const { LeftMenuActions: { changeLeftMenuState }, isOpen } = this.props;
    changeLeftMenuState(!isOpen);
  }

  render() {
    return (
      <div>
        <Drawer width={200} open={this.props.isOpen} >
          <AppBar title='AppBar'
            onTouchTap={::this.handleToggle}
          />
        </Drawer>
      </div>
    );
  }
}
