import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Landscapes from './pages/Landscapes/Landscapes'
import TravelExhibition from './components/travel_exhibition/header_sodiqjon'
// import Home from './pages/Landscapes/Landscapes'

function App() {
  return (
    <div>
      <Landscapes />
      <TravelExhibition />
        {/* <Routes> */}
          {/* <Route path="/Home" element={<Home />} /> */}
        {/* </Routes> */}
    </div>
  );
}

export default App;