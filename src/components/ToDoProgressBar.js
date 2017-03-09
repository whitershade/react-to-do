import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

export default class ToDoProgressBar extends React.Component {

  render() {
    return (
      <LinearProgress mode="determinate" value={ this.props.stateProgressBarValue } />
    );
  }
}
