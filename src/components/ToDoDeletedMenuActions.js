import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

export default class Dialogs extends React.Component {
  handleOpen = () => {
    this.props.dispatchSetFinallyDeleteDialogIsOpenState.actionSetFinallyDeleteDialogIsOpenState(true)
  }

  handleClose = () => {
    this.props.dispatchSetFinallyDeleteDialogIsOpenState.actionSetFinallyDeleteDialogIsOpenState(false)
  }

  removeAll = () => {
    this.props.dispatchSetFinallyDeleteDialogIsOpenState.actionFinallyDeleteRemovedToDoes();
    this.props.dispatchSetFinallyDeleteDialogIsOpenState.actionSetFinallyDeleteDialogIsOpenState(false)
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={false}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Remove All"
        primary={true}
        onTouchTap={this.removeAll}
      />
    ];

    return (
      <div className='todo-deleted-menu'>
          <RaisedButton label="Remove All" onTouchTap={this.handleOpen} />
          <Dialog
            title="Finally remove all todoes from the basket"
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
