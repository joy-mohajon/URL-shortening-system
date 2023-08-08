import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

const AlertDialogBox = ({
  isDialogOpen,
  dialogClose,
  confirmToAdd,
  message,
}) => {
  const handleClose = () => {
    dialogClose();
  };

  const handleConfirm = () => {
    confirmToAdd();
  };

  return (
    <Dialog
      open={isDialogOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
    >
      <DialogTitle id="alert-dialog-title">{"Dialog Title"}</DialogTitle>
      <DialogContent>{message}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleConfirm} color="primary" autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialogBox;
