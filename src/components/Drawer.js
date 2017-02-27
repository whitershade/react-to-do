import React, { PropTypes } from 'react'
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerOpenRightExample extends React.Component {
  static PropTypes = {
    isOpen: PropTypes.bool,
  }

 handleToggle = () => (this.props.LeftMenuActions.changeLeftMenuState(!this.props.isOpen));

  render() {
    return (
      <div>
        <RaisedButton
          label='Toggle Drawer'
          onTouchTap={this.handleToggle}
        />
        <Drawer width={200} open={this.props.isOpen} >
          <AppBar title='AppBar'
            onTouchTap={this.handleToggle}
          />
        </Drawer>
      </div>
    );
  }
}
