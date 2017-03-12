import React, { PropTypes, Component } from 'react'

import Drawer                          from 'material-ui/Drawer'
import AppBar                          from 'material-ui/AppBar'

import { rootPath, deletedPath}        from '../constants/Routes.js'
import AsideMenuLink                   from './AsideMenuLink'


export default class LeftMenu extends Component {
  static PropTypes = {
    isOpen: PropTypes.bool.isRequired
  }

  constructor() {
    super()
    this.handleToggle = ::this.handleToggle
  }

  handleToggle() {
    const { AsideMenuActions: { changeLeftMenuState }, stateIsOpen } = this.props
    changeLeftMenuState(!stateIsOpen);
  }

  render() {
    const links = [{
        link: rootPath,
        classLink: 'aside-menu__link',
        text: 'ToDo'
      },
      {
        link: deletedPath,
        classLink: 'aside-menu__link',
        text: 'Deleted'
      }
    ]
    return (
      <div>
        <Drawer width={200} open={ this.props.stateIsOpen } >
          <AppBar title='AppBar'
            onTouchTap={ this.handleToggle }
          />
            { links.map((item, i) => <AsideMenuLink key={ i }
                                                    link={ item.link }
                                                    classLink={ item.classLink }
                                                    text={ item.text }
                                      />)}
        </Drawer>
      </div>
    );
  }
}
