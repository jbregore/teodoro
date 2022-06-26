import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
  // position: "absolute",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  // width: "80%",
  // // bgcolor: "background.paper",
  // //   border: '2px solid #000',
  // borderRadius: 3,
  // boxShadow: 24,
  // minHeight: "80vh",
  // p: 4,
};

export default function CircularIndeterminate() {
  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <CircularProgress size={60}/>
      </Box>
    </Modal>
  );
}
