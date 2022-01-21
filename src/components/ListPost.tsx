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
import { deletePost, loadPosts } from "../redux/actions";
import { State } from "../redux/index";
import { PostProps } from "../models/redux";
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

  const { posts } = useSelector((state: State) => state.post);

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  // Hanlde Delete

  const handleDelete = (id: number) => {
    if (window.confirm("Are You Sure You Want To Delete?")) {
      dispatch(deletePost(id));
    }
  };
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
            {posts &&
              posts.map((items: PostProps, i) => {
                return (
                  <>
                    <TableRow key={i}>
                      <TableCell align="center">{items.id}</TableCell>
                      <TableCell align="center">{items.title}</TableCell>
                      <TableCell align="center">{items.body}</TableCell>
                      <TableCell align="center">
                        <Tooltip title="Edit">
                          <IconButton>
                            <Link to={`post/edit/${items.id}`}>
                              <EditIcon color="primary"></EditIcon>
                            </Link>
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton onClick={() => handleDelete(items.id)}>
                            <DeleteIcon color="secondary"></DeleteIcon>
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  </>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListPost;
