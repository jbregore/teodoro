import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getBookTitle, updateBookTitle } from "../../../actions/book";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#555",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables({ page }) {
  const dispatch = useDispatch();
  const profile = JSON.parse(localStorage.getItem("profile"));
  const { bookTitles } = useSelector((state) => state.book);
  const [books, setBooks] = useState([]);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    // console.log(books)
    setBooks(bookTitles);
  }, [bookTitles]);

  const testSave = () => {
  };

  const handleSubmit = () => {
    // console.log(books)
    dispatch(updateBookTitle(books));
  }

  return (
    <>
      <Typography>Book Title</Typography>

      <br />
      <TableContainer
        component={Paper}
        style={{ overflowX: "scroll", maxWidth: "86vw" }}
      >
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell style={{ width: 50 }}>Grade</StyledTableCell>
              <StyledTableCell align="left" style={{ minWidth: 250 }}>
                Filipino Title
              </StyledTableCell>
              <StyledTableCell align="left" style={{ minWidth: 250 }}>
                English Title
              </StyledTableCell>
              <StyledTableCell align="left" style={{ minWidth: 250 }}>
                Math Title
              </StyledTableCell>
              <StyledTableCell align="left" style={{ minWidth: 250 }}>
                Science Title
              </StyledTableCell>
              <StyledTableCell align="left" style={{ minWidth: 250 }}>
                AP Title
              </StyledTableCell>
              <StyledTableCell align="left" style={{ minWidth: 250 }}>
                EsP Title
              </StyledTableCell>
              <StyledTableCell align="left" style={{ minWidth: 250 }}>
                TLE Title
              </StyledTableCell>
              <StyledTableCell align="left" style={{ minWidth: 250 }}>
                MAPEH Title
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books?.map((item, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {item.studentGrade}
                </StyledTableCell>
                <StyledTableCell align="left" style={{ minWidth: 250 }}>
                  <TextField
                    
                    label="Title"
                    variant="outlined"
                    size="small"
                    fullWidth
                    multiline
                    rows={2}
                    value={item.filipinoTitle}
                    onChange={(e) => {
                      setBooks(
                        [...books].map((object) => {
                          if (object.studentGrade === item.studentGrade) {
                            return {
                              ...object,
                              filipinoTitle: e.target.value,
                            };
                          } else return object;
                        })
                      );
                    }}
                  />
                  {/* {item.filipinoTitle} */}
                </StyledTableCell>
                <StyledTableCell align="left" style={{ minWidth: 250 }}>
                  <TextField
                    
                    label="Title"
                    variant="outlined"
                    size="small"
                    fullWidth
                    multiline
                    rows={2}
                    value={item.englishTitle}
                    onChange={(e) => {
                      setBooks(
                        [...books].map((object) => {
                          if (object.studentGrade === item.studentGrade) {
                            return {
                              ...object,
                              englishTitle: e.target.value,
                            };
                          } else return object;
                        })
                      );
                    }}
                  />
                </StyledTableCell>
                <StyledTableCell align="left" style={{ minWidth: 250 }}>
                  <TextField
                    
                    label="Title"
                    variant="outlined"
                    size="small"
                    fullWidth
                    multiline
                    rows={2}
                    value={item.mathTitle}
                    onChange={(e) => {
                      setBooks(
                        [...books].map((object) => {
                          if (object.studentGrade === item.studentGrade) {
                            return {
                              ...object,
                              mathTitle: e.target.value,
                            };
                          } else return object;
                        })
                      );
                    }}
                  />
                </StyledTableCell>
                <StyledTableCell align="left" style={{ minWidth: 250 }}>
                  <TextField
                    
                    label="Title"
                    variant="outlined"
                    size="small"
                    fullWidth
                    multiline
                    rows={2}
                    value={item.scienceTitle}
                    onChange={(e) => {
                      setBooks(
                        [...books].map((object) => {
                          if (object.studentGrade === item.studentGrade) {
                            return {
                              ...object,
                              scienceTitle: e.target.value,
                            };
                          } else return object;
                        })
                      );
                    }}
                  />
                </StyledTableCell>

                <StyledTableCell align="left" style={{ minWidth: 250 }}>
                  <TextField
                    
                    label="Title"
                    variant="outlined"
                    size="small"
                    fullWidth
                    multiline
                    rows={2}
                    value={item.apTitle}
                    onChange={(e) => {
                      setBooks(
                        [...books].map((object) => {
                          if (object.studentGrade === item.studentGrade) {
                            return {
                              ...object,
                              apTitle: e.target.value,
                            };
                          } else return object;
                        })
                      );
                    }}
                  />
                </StyledTableCell>
                <StyledTableCell align="left" style={{ minWidth: 250 }}>
                  <TextField
                    
                    label="Title"
                    variant="outlined"
                    size="small"
                    fullWidth
                    multiline
                    rows={2}
                    value={item.espTitle}
                    onChange={(e) => {
                      setBooks(
                        [...books].map((object) => {
                          if (object.studentGrade === item.studentGrade) {
                            return {
                              ...object,
                              espTitle: e.target.value,
                            };
                          } else return object;
                        })
                      );
                    }}
                  />
                </StyledTableCell>
                <StyledTableCell align="left" style={{ minWidth: 250 }}>
                  <TextField
                    
                    label="Title"
                    variant="outlined"
                    size="small"
                    fullWidth
                    multiline
                    rows={2}
                    value={item.tleTitle}
                    onChange={(e) => {
                      setBooks(
                        [...books].map((object) => {
                          if (object.studentGrade === item.studentGrade) {
                            return {
                              ...object,
                              tleTitle: e.target.value,
                            };
                          } else return object;
                        })
                      );
                    }}
                  />
                </StyledTableCell>
                <StyledTableCell align="left" style={{ minWidth: 250 }}>
                  <TextField
                    
                    label="Title"
                    variant="outlined"
                    size="small"
                    fullWidth
                    multiline
                    rows={2}
                    value={item.mapehTitle}
                    onChange={(e) => {
                      setBooks(
                        [...books].map((object) => {
                          if (object.studentGrade === item.studentGrade) {
                            return {
                              ...object,
                              mapehTitle: e.target.value,
                            };
                          } else return object;
                        })
                      );
                    }}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <br />
      <Box sx={{ flexGrow: 1, textAlign: "right" }}>
        <Button
          variant="contained"
          style={{ marginRight: 13 }}
          size="small"
            onClick={() => setConfirm(true)}
          // onClick={testSave}
        >
          Save
        </Button>
      </Box>

      <Dialog
        open={confirm}
        onClose={() => setConfirm(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Update Book Titles</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to update this changes?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ pb: 2, mr: 2 }}>
          <Button variant="contained" size="small" onClick={handleSubmit}>
            Yes
          </Button>
          <Button
            onClick={() => setConfirm(false)}
            variant="contained"
            color="error"
            size="small"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
