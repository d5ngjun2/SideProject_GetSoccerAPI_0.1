import { useState } from "react";
import "./App.css";
import Main from "./pages/MainPage";
import Layout from "./layout/Layout";
import FootBallStandings from "./pages/FootBallStandings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";

function App() {
  
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/standings" element={<FootBallStandings />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
