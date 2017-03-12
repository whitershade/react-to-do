import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

export default class Dialogs extends React.Component {
  handleOpen = () => {
    this.props.setFinallyDeleteDialogIsOpenState(true)
  }

  handleClose = () => {
    this.props.setFinallyDeleteDialogIsOpenState(false)
  }

  removeAll = () => {
    this.props.finallyDeleteRemovedToDoes();
    this.props.setFinallyDeleteDialogIsOpenState(false)
  }

  render() {
    const actions = [
      <FlatButton
        label='Cancel'
        primary={false}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label='Remove All'
        primary={true}
        onTouchTap={this.removeAll}
      />
    ];

    return (
      <div className='todo-deleted-menu'>
          <RaisedButton label='Remove All' onTouchTap={this.handleOpen} />
          <Dialog
            title='Finally remove all todoes from the basket'
            actions={actions}
            modal={false}
            open={this.props.stateFinallyDeleteDialogIsOpen}
            onRequestClose={this.handleClose}
          >
          </Dialog>
      </div>
    );
  }
}
