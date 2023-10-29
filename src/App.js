import React from "react";
import "./App.css";
import TravelExhibition from "./components/sodiqjon_exhibition/header_sodiqjon";
import Landscapes from "./pages/Landscapes/Landscapes";
import About from "./pages/about/About";

function App() {
  return (
    <div>
      <Landscapes />
      <TravelExhibition />
      <About />
      <Landscapes />
    </div>
  );
}

export default App;
