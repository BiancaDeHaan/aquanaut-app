import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import router from "next/router";
import styled from "styled-components";
import homeButton from '../../public/home.png'
import Image from 'next/image'


class HomeDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleAgree = () => {
    this.handleClose();
    router.push('/');
  };
  handleDisagree = () => {
    this.handleClose();
  };
  render() {
    return (
      <div>
        {/* Button to trigger the opening of the dialog */}
        <HomeButton>
          <Image src={homeButton} onClick={this.handleClickOpen} />
        </HomeButton>
        {/* Dialog that is displayed if the state open is true */}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to quit?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              All progress since the last save will be lost.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDisagree} color="primary">
              No
            </Button>
            <Button onClick={this.handleAgree} color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const HomeButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 5%;
    cursor: pointer;

`

export default HomeDialog;
