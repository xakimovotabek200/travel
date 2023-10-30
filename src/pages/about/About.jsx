import React from "react";
import Ellepsi from "../../img/Ellipse 626.png";
import Ellepsis from "../../img/Ellipse 627.png";
import Abouts from "../../img/about-us-img-21.png";
import Group from "../../img/Group 1000001755.png";
import Image from "./../../img/image 919.png";
import Image1 from "../../img/1.png";
import Image2 from "../../img/2.png";
import Image4 from "../../img/4.png";
import Image5 from "../../img/5.png";
import Image6 from "../../img/6.png";
import Image7 from "../../img/7.png";
import Image8 from "../../img/8.png";
import Image9 from "../../img/9.png";
import Image10 from "../../img/10.png";
import Image11 from "../../img/11.png";
import "./About.css";
import "../../Home/home.css";

const About = () => {
  return (
    <div className="">
      <div className="borders">
        <div className="border">
          <div className="border_text">
            <h4>Promotion</h4>
            <h1>We Provide You Best Europe Sightseeing Tours</h1>
            <p>
              Et labore harum non nobis ipsum eum molestias mollitia et corporis
              praesentium a laudantium internos. Non quis eius quo eligendi
              corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
              ducimus illum aut optio quibusdam!
            </p>
            <button className="btn">View Packages</button>
          </div>
        </div>
        <div className="border">
          <img className="elli" src={Ellepsis} alt="" />
          <img className="elis" src={Ellepsi} alt="" />
        </div>
      </div>
      <div className="Opacha">
        <div className="text">
          <h1>Wanderlust</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="106"
            height="106"
            viewBox="0 0 106 106"
            fill="none"
          >
            <rect x="27" y="27" width="55" height="55" fill="white" />
            <path
              d="M53 6.625C27.3902 6.625 6.625 27.3902 6.625 53C6.625 78.6098 27.3902 99.375 53 99.375C78.6098 99.375 99.375 78.6098 99.375 53C99.375 27.3902 78.6098 6.625 53 6.625ZM67.9166 53.7143L45.3088 70.1629C45.1848 70.252 45.0387 70.3051 44.8866 70.3166C44.7344 70.328 44.582 70.2973 44.4461 70.2277C44.3102 70.1582 44.1962 70.0526 44.1164 69.9224C44.0367 69.7923 43.9944 69.6427 43.9941 69.49V36.6135C43.9936 36.4605 44.0355 36.3105 44.1151 36.1799C44.1946 36.0493 44.3088 35.9433 44.445 35.8736C44.5811 35.8039 44.7339 35.7733 44.8863 35.7851C45.0388 35.797 45.185 35.8508 45.3088 35.9406L67.9166 52.3789C68.0234 52.4544 68.1105 52.5545 68.1707 52.6707C68.2308 52.7869 68.2622 52.9158 68.2622 53.0466C68.2622 53.1774 68.2308 53.3063 68.1707 53.4225C68.1105 53.5387 68.0234 53.6387 67.9166 53.7143Z"
              fill="#DF6951"
            />
          </svg>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom_flex">
          <img src={Abouts} alt="" />
        </div>
        <div className="bottom_flexx">
          <div className="dur">
            <p>Trend</p>
            <h1> Our Popular Tour Plans</h1>
            <h6>
              Et labore harum non nobis ipsum eum molestias mollitia et corporis
              praesentium a laudantium. Et labore harum non nobis ipsum eum
              molestias mollitia et corporis praesentium a laudantium.
            </h6>
            <div className="imgss">
              <img src={Group} alt="" />
              <img src={Group} alt="" />
              <img src={Group} alt="" />
            </div>
          </div>
          <div className="flexx">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
      <div className="Opachalar">
        <div className="head">
          <p>Explore more</p>
          <h1>Our International Packages</h1>
        </div>
        <div className="grid">
          <img src={Image1} alt="" />
          <img src={Image2} alt="" />
          <img src={Image5} alt="" />
          <img src={Image6} alt="" />
          <img src={Image7} alt="" />
          <img src={Image8} alt="" />
          <img src={Image9} alt="" />
          <img src={Image10} alt="" />
          <img src={Image11} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
