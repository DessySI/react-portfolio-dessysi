//Must be your top-level component and render all necessary child components

import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
