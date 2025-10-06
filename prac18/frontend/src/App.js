import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
