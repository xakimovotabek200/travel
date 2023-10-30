import React from "react";
import "../../Home/home.css";
import { Link } from "react-router-dom";

const HomeRoutes = () => {
  return (
    <div>
      <div className="navbar">
        <h1>Travel</h1>
        <ul>
          <li>
            <Link to={"/"} href="">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} href="">
              About
            </Link>
          </li>
          <li>
            <Link to={"/"} href="">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
        <button className="redbutton">Get in touch</button>
      </div>
    </div>
  );
};

export default HomeRoutes;
