import React from 'react';
import './home.css';

import image909 from '../';
import tourGuide from './img/tour-guide1.png';
import image911 from './img/image911.png';
import image913 from './img/image913.png';
import image912 from './img/image912(1).png';
import image50 from './img/image50.png';
import rectangle19294 from './img/Rectangle19294.png';
import rectangle19296 from './img/Rectangle19296.png';
import image51 from './img/image51.png';
import travelling1 from './img/travelling1.png';
import hands1 from './img/hands1.png';
import medicalTeam1 from './img/medical-team1.png';
import group7 from './img/Group7.svg';
import image872 from './img/image872.png';
import rectangle17 from './img/Rectangle17(1).png';
import rectangle19305 from './img/Rectangle19305.png';
import ellipse623 from './img/Ellipse623.svg';
import userAvatar from './img/ooui_user-avatar-outline.svg';

const Home = () => {
  return (
    <div className="allofthem">
      <div className="landing">
        <div className="container">
          <h1>Welcome to our Travel Agency</h1>
          <h2>Explore the world with us</h2>
        </div>
      </div>

      <div className="clients">
        <div className="container">
          <h2>Our Clients</h2>
          <img src={image909} alt="Client" />
          <img src={tourGuide} alt="Client" />
          <img src={image911} alt="Client" />
          <img src={image913} alt="Client" />
        </div>
      </div>

      <div className="services">
        <div className="container">
          <h2>Our Services</h2>
          <img src={image912} alt="Service" />
          <img src={image50} alt="Service" />
          <img src={rectangle19294} alt="Service" />
          <img src={rectangle19296} alt="Service" />
        </div>
      </div>

      <div className="romantic">
        <div className="container">
          <h2>Experience Romantic Getaways</h2>
          <img src={image51} alt="Romantic Getaway" />
        </div>
      </div>

      <div className="fast-easy">
        <div className="container">
          <h2>Fast & Easy Booking</h2>
          <img src={travelling1} alt="Fast & Easy Booking" />
          <img src={hands1} alt="Fast & Easy Booking" />
        </div>
      </div>

      <div className="promotion">
        <div className="container">
          <h2>Special Promotion</h2>
          <img src={medicalTeam1} alt="Special Promotion" />
        </div>
      </div>

      <div className="trending">
        <div className="container">
          <h2>Trending Destinations</h2>
          <img src={group7} alt="Trending Destination" />
          <img src={image872} alt="Trending Destination" />
          <img src={rectangle17} alt="Trending Destination" />
          <img src={rectangle19305} alt="Trending Destination" />
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <img src={ellipse623} alt="Footer" />
          <img src={userAvatar} alt="Footer" />
        </div>
      </div>
    </div>
  );
}

export default Home;