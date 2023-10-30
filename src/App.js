import React from "react";
import "./App.css";
import TravelExhibition from "./components/sodiqjon_exhibition/header_sodiqjon";
import Landscapes from "./pages/Landscapes/Landscapes";
// import About from "./pages/about/About";
<<<<<<< HEAD
// import { Index } from "./pages/itravel/end";
function App() {
  return (
    <div>
      {/* <Index /> */}
      <Landscapes />
      {/* <TravelExhibition /> */}
=======
import { Index } from "./pages/itravel/end";
import Home from "./Home/home.jsx"

function App() {
  return (
    <div>
      <Home />
      <Index />
      {/* <Landscapes /> */}
      <TravelExhibition />
>>>>>>> c12f1e7a7c8b398f27eb18f74751015ec6d7fe38
      {/* <About /> */}
      {/* <About /> */}
    </div>
  );
}
export default App