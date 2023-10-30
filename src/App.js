import React from "react";
import "./App.css";
import TravelExhibition from "./components/sodiqjon_exhibition/header_sodiqjon";
// import Landscapes from "./pages/Landscapes/Landscapes";
// import About from "./pages/about/About";
import { Index } from "./pages/itravel/end";
import Home from "./Home/home.jsx"

function App() {
  return (
    <div>
      <Home />
      <Index />
      {/* <Landscapes /> */}
      <TravelExhibition />
      {/* <About /> */}
      {/* <About /> */}
    </div>
  );
}
export default App