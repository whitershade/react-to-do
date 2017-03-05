import React, { PropTypes, Component } from 'react'
import { Link }                        from 'react-router'

import Drawer                          from 'material-ui/Drawer'
import AppBar                          from 'material-ui/AppBar'


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
        <Link to="/">ToDo</Link>  
        <Link to="/deleted">About</Link>
        </Drawer>
      </div>
    );
  }
}
