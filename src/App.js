import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Landscapes from './pages/Landscapes/Landscapes'
import TravelExhibition from './components/travel_exhibition/header_sodiqjon'
import Landscapes from "./pages/Landscapes/Landscapes";
import About from "./pages/about/About";
// import Home from './pages/Landscapes/Landscapes'

function App() {
  return (
    <div>
      <Landscapes />
      <TravelExhibition />
      return <>
    <About />
    <Landscapes />;
  </>
       
    </div> 
  );
}

export default App;
