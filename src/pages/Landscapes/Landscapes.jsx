import "./Landscapes.css"
import React from "react";
import { GrCircleInformation } from "react-icons/gr";
import { GrPlan } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TfiGallery } from "react-icons/tfi";

function Landscapes() {
  return (
    <div className="top">
      <h1>
        <GrCircleInformation className="i" /> Information
      </h1>
      <h1>
        <GrPlan className="i" />
        Tour Plan
      </h1>
      <h1>
        <HiOutlineLocationMarker className="i" />
        Location
      </h1>
      <h1>
        <TfiGallery className="i" />
        Gallery
      </h1>
    </div>
  );
}

export default Landscapes;
