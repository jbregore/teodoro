import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import { useDispatch } from "react-redux";
import { closeAlertBox } from "../../actions/students";

export default function AlertDialog({ title }) {
  const [open, setOpen] = React.useState(true);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const closeAlert = () => {
    dispatch(closeAlertBox());
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div
          style={{
            minWidth: 200,
            minHeight: 100,
            backgroundColor: "#fff",
            padding: 20,
            textAlign: "center",
          }}
        >
          <p>{title}</p>
          <Button variant="contained" color="success" size="small" style={{marginTop: 15}}
          onClick={closeAlert}>
            OK
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
