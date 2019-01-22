import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ReduxTextField from "./fields/ReduxTextField";
import validate from "./validation/personal_info_validation";

class PersonalInfoDialog extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleClickOpen}
          fullWidth={true}
        >
          Request Quote
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Request Quote</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter your details so we can prepare your quote.
            </DialogContentText>
            <Field
              type="text"
              name="first_name"
              label="First Name"
              component={ReduxTextField}
              margin="dense"
              required
            />
            <Field
              type="text"
              name="last_name"
              label="Last Name"
              component={ReduxTextField}
              margin="dense"
              required
            />
            <Field
              type="email"
              name="email"
              label="Email"
              component={ReduxTextField}
              margin="dense"
              required
            />
            <Field
              type="text"
              name="telephone"
              label="Phone Number"
              component={ReduxTextField}
              margin="dense"
              required
            />
            <Field
              type="text"
              name="client_comments"
              label="Comments"
              component={ReduxTextField}
              margin="dense"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="default">
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={this.handleClose}
              color="secondary"
            >
              Send Request
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

const WrappedPersonalInfoDialog = reduxForm({
  form: "PersonalInfoDialog",
  validate
})(PersonalInfoDialog);

export default connect(
  null,
  null
)(withRouter(WrappedPersonalInfoDialog));