import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";

import SubjectModal from "../../Modals/SubjectModal/SubjectModal";


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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("ENG101", "English", "All", "Blablabla", 4.0),
  createData("MATH101", "Math", "All", "Blablabla", 4.3),
  createData("FIL101", "Filipino", "All", "Blablabla", 6.0),
  createData("MAPEH101", "Mapeh", "All", "Blablabla", 4.3),
  createData("AP101", "Araling Panlipunan", "All", "Blablabla", 3.9),
];

export default function CustomizedTables() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        style={{ float: "right" }}
        onClick={() => setOpen(true)}
      >
        New Entry
      </Button>
      <br />
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Subject ID </StyledTableCell>
              <StyledTableCell align="center">Subject</StyledTableCell>
              <StyledTableCell align="center">Application For</StyledTableCell>
              <StyledTableCell align="center">Description</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                <StyledTableCell align="center">{row.fat}</StyledTableCell>
                <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    style={{ marginRight: 5 }}
                    size="small"
                  >
                    View
                  </Button>
                  <Button
                    variant="contained"
                    style={{ marginRight: 5, backgroundColor: "#009900" }}
                    size="small"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    style={{ marginRight: 5 }}
                    size="small"
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Divider /> */}
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2">Showing 7 out of 35 entries</Typography>
        <Stack spacing={2}>
          <Pagination count={10} size="small" />
        </Stack>
      </div>

      {isOpen && <SubjectModal closeModal={setOpen} />}
    </>
  );
}
