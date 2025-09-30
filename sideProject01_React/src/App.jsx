import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Main from "./pages/Main";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Main />
      </Layout>
    </>
  );
}

export default App;
