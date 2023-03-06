//Must be your top-level component and render all necessary child components

import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="row">
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
