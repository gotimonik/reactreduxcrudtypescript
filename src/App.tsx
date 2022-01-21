import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditUser";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/edit/:id" element={<EditPost />} />
      </Routes>
    </>
  );
};

export default App;
