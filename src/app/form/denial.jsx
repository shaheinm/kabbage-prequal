import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class DenialDialog extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Acknowledge"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title="You Did Not Pre-Qualify"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          Unfortunately, you dont qualify for a Kabbage loan at this time.
        </Dialog>
      </div>
    );
  }
}
