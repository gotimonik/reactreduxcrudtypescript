import React, { useState } from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { deepPurple, green, orange } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
interface PropsTypes {
  title: string;
  body: string;
}

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

const AddPost = () => {
  // const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clasess = useStyle();
  // Insert Employees With API

  const [post, setPost] = useState<PropsTypes>({
    title: "",
    body: "",
  });

  // Get Value From TextField And Set into The State

  function GetDatafromField(e: React.ChangeEvent<HTMLInputElement>) {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  }

  // Form Submit

  const OnFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addPost(post));
    navigate("/");
  };

  return (
    <>
      <Grid container px={2}>
        <Grid item md={6} xs={12} px={4}>
          <Box textAlign="center" p={2} mb={2} className={clasess.addStuColor}>
            <Typography variant="h4">Add Employees</Typography>
          </Box>
          <form noValidate onSubmit={OnFormSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Title"
                  id="title"
                  required
                  autoFocus
                  name="title"
                  autoComplete="Tiel"
                  fullWidth
                  onChange={GetDatafromField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Body"
                  id="body"
                  required
                  autoFocus
                  name="body"
                  autoComplete="Body"
                  onChange={GetDatafromField}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button type="submit" variant="contained" fullWidth>
                Save Post
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default AddPost;
