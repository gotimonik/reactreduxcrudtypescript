import React, { useEffect, useState } from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { deepPurple, green, orange } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getSinglePost, updatePost } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { State } from "../redux/index";

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

const EditPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clasess = useStyle();
  const { id }: any = useParams();

  // Insert Post With API

  const [postItems, setPostItems] = useState<PropsTypes>({
    title: "",
    body: "",
  });

  useEffect(() => {
    dispatch(getSinglePost(id));
  }, []);

  const { post } = useSelector((state: State) => state.post);

  useEffect(() => {
    if (post) {
      setPostItems({ ...post });
    }
  }, [post]);

  // Get Value From TextField And Set into The State

  function GetDatafromField(e: React.ChangeEvent<HTMLInputElement>) {
    setPostItems({
      ...postItems,
      [e.target.name]: e.target.value,
    });
  }

  // Form Submit

  const OnFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updatePost(postItems, id));
    navigate("/");
  };

  return (
    <>
      <Grid container px={2}>
        <Grid item md={6} xs={12} px={4}>
          <Box textAlign="center" p={2} mb={2} className={clasess.addStuColor}>
            <Typography variant="h4">Update Post</Typography>
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
                  value={postItems.title}
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
                  value={postItems.body}
                  autoComplete="Body"
                  onChange={GetDatafromField}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button type="submit" variant="contained" fullWidth>
                Update Post
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default EditPost;
