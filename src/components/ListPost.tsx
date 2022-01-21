import React, { useEffect } from "react";
import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Tooltip,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { deepPurple, green, orange } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../redux/actions";

const useStyle = makeStyles({
  headingColor: {
    backgroundColor: deepPurple[400],
    color: "white",
  },
  addStuColor: {
    backgroundColor: green[400],
    color: "white",
  },
  stuListColor: {
    backgroundColor: orange[400],
    color: "white",
  },
  tableHeadCell: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

const ListPost = () => {
  const clasess = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, []);
  return (
    <>
      <Box textAlign="center" p={2} className={clasess.stuListColor}>
        <Typography variant="h4">Post List</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell align="center" className={clasess.tableHeadCell}>
                ID
              </TableCell>
              <TableCell align="center" className={clasess.tableHeadCell}>
                TITLE
              </TableCell>
              <TableCell align="center" className={clasess.tableHeadCell}>
                BODY
              </TableCell>
              <TableCell align="center" className={clasess.tableHeadCell}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {employees.map((employ, i) => {
              return (
                <> */}
            <TableRow>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">vijay</TableCell>
              <TableCell align="center">vijay@gmail.com</TableCell>
              <TableCell align="center">
                <Tooltip title="Edit">
                  <IconButton>
                    <Link to="/edit/1">
                      <EditIcon color="primary"></EditIcon>
                    </Link>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon color="secondary"></DeleteIcon>
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
            {/* </>
              );
            })} */}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListPost;
