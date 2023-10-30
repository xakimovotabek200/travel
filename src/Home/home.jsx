import React from 'react'
import './home.css'
import flyemirates from './img/image 909.png'
import guide1 from './img/tour-guide 1.png'
import airbnb from './img/image 911.png'
import turkish from './img/image 913.png'
import aswiss from './img/image 912 (1).png'
import romanticOpa from './img/image 50.png'
import banner1 from './img/Rectangle 19294.png'
import kichikrasm1 from './img/Rectangle 19296.png'
import paris from './img/image 51.png'
import plane from './img/travelling 1.png'
import hands1 from './img/hands 1.png'
import medicalteam1 from './img/medical-team 1.png'
import group7 from './img/Group 7.svg'
import planeImage from './img/image 872.png'
import hawaii from './img/Rectangle 17 (1).png'
import product1 from './img/Rectangle 19305.png'
import logo1 from './img/Ellipse 623.svg'

import person from './img/ooui_user-avatar-outline.svg'

function home() {
  return (
    <div className='allofthem'>
      <div className='landing'>
        <div className='navbar'>
          <h1>Travel</h1>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
          </ul>
          <button className='redbutton'>Get in touch</button>
        </div>
        <div className="main_text">
          <h1>No matter where <br />  you’re going to, we’ll <br /> take you there</h1>
          <div className="request">
            <input type="text" placeholder='Where to' />
            <h2>Travel type</h2>
            <h2>duration</h2>
            <button>Submit</button>
          </div>
        </div>
      </div>
      {/* Clients */}
      <div className="clients">
        <img src={flyemirates} alt="" />
        <img src={flyemirates} alt="" />
        <img src={flyemirates} alt="" />
        <img src={flyemirates} alt="" />
        <img src={flyemirates} alt="" />
      </div>
      <div classname="services">
        <h5 className='small_red'>CATEGORY</h5>
        <h1>We Offer Best Services</h1>
        <div className="cards">
          <div className="card">
            <img src={guide1} alt="" />
            <h1>Guided tours</h1>
            <h3>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</h3>

          </div>
          <div className="card">
            <img src={plane} alt="" />
            <h1>Guided tours</h1>
            <h3>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</h3>

          </div>
          <div className="card">
            <img src={hands1} alt="" />
            <h1>Guided tours</h1>
            <h3>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</h3>

          </div>
          <div className="card">
            <img src={medicalteam1} alt="" />
            <h1>Guided tours</h1>
            <h3>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</h3>

          </div>
        </div>
      </div>
      {/* romantic section */}

      <div className="romantic">
        <div className="romantic_pictures">
          <img src={romanticOpa} alt="" />

        </div>
        <div className="romantic_text">
          <h5 className='small_red'>Honeymoon Specials</h5>
          <h1>Our Romantic Tropical <br /> Destinations</h1>
          <h4>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</h4>
          <button className='redbutton'>View packages</button>

        </div>
      </div>
      {/* fast & easy */}

      <div className="fast-easy">
        <div className="fast_left">
          <h5 className='small_red'>Fast & easy</h5>
          <h1>Get Your Favourite <br /> Resort Bookings</h1>
          <div className="tips">
            <div className="tip1">
              <img src={group7} alt="" />
              <div className='tip1text'>
                <h1>Choose destianation</h1>
                <h5>Lorem ipsum dolor sit amet, consectetur </h5>
              </div>

            </div>
            <div className="tip1">
              <img src={group7} alt="" />
              <div className='tip1text'>
                <h1>Choose destianation</h1>
                <h5>Lorem ipsum dolor sit amet, consectetur </h5>
              </div>
            </div>
            <div className="tip1">
              <img src={group7} alt="" />
              <div className='tip1text'>
                <h1>Choose destianation</h1>
                <h5>Lorem ipsum dolor sit amet, consectetur </h5>
              </div>
            </div>
          </div>
        </div>
        <div className='fast_right'>
          <img src={planeImage} alt="" />
          <div className="complicated_cart">
            <img src={hawaii} alt="" />
            <h1>Trip to Hawaii</h1>
            <h5>14-29 June | by JR Martir</h5>
            <h6>60 people are interested</h6>
          </div>
        </div>
      </div>
      <div className="banner1">
        <h1>Let’s make your <br /> next holiday amazing</h1>
      </div>
      <div className="promotion">
        <div className="promotion_left">
          <h5 className='small_red'>PROMOTION</h5>
          <h1>We Provide You Best <br /> Europe Sightseeing Tours</h1>
          <h3>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</h3>
          <button className='redbutton'>View packages</button>
          <div className="small_gallery">
            <div className="rasmcard">
              <h4>$700</h4>
              <img src={kichikrasm1} alt="" />
            </div>

            <div className="rasmcard">
              <h4>$700</h4>
              <img src={kichikrasm1} alt="" />
            </div>
            <div className="rasmcard">
              <h4>$700</h4>
              <img src={kichikrasm1} alt="" />
            </div>
            <div className="rasmcard">
              <h4>$700</h4>
              <img src={kichikrasm1} alt="" />
            </div>
          </div>

        </div>
        <div className="promotion_right">
          <img src={paris} alt="" />
        </div>

      </div>
      <div classname="trending">
        <h5 classname="smallred">TRENDY</h5>
        <h1>Our Trending Tour Packages</h1>
        <div className="product_cards">
          <div className="product_card">
            <div className="imagesss">
              <img src={product1} alt="" />
              <img src={logo1} alt="" />

            </div>
            <div className="date">
              {/* <img src={calendar} alt="" />  */}
              <div className="people">
                <img src={person} alt="" />
                <h4>25 people are going</h4>

              </div>
              <h1>Switzerland</h1>
              <h4 className="price"> $1000</h4>


            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default home