import React from "react";
import Img_text from './img_text'
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";
import img5 from "../img/5.png";
import "./Sodiqjon.css";

function travel_exhibition() {
  return (
    <div>
      <header>
        <div className="table">
          <ul>
            <li>
              <h1>Travel</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="99"
                height="39"
                viewBox="0 0 99 39"
                fill="none"
              >
                <g clip-path="url(#clip0_0_1374)">
                  <path
                    d="M-3.76925e-05 15.123C5.57701 23.1055 29.8414 31.0512 46.1621 30.5525C63.803 30.0535 73.4635 26.5629 92.2711 13.7275C92.2165 15.1328 92.0508 16.2765 92.0776 17.3197C92.0583 18.5099 92.0498 19.7683 92.3016 20.9154C92.3557 21.256 93.0631 21.7721 93.4806 21.7756C93.8981 21.779 94.5002 21.1945 94.5816 20.8324C95.282 17.3691 95.8469 13.9274 96.4688 10.4067C96.6345 9.26304 96.0979 8.51032 94.8915 8.35287C90.3127 7.96322 85.723 7.50545 81.0872 7.19468C80.038 7.15192 78.8613 7.61826 77.5057 7.83369C79.0556 10.5902 81.4416 9.86186 83.3229 10.331C85.2828 10.8576 87.3242 11.022 89.8264 11.4623C84.8069 16.1707 79.4923 19.4595 73.698 21.9166C52.4895 31.0134 31.4196 29.6132 10.6746 20.2004C7.97479 18.9535 5.43499 17.4018 2.79209 16.0759C1.99239 15.8539 1.26046 15.621 -3.76925e-05 15.123Z"
                    fill="#DF6951"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_1374">
                    <rect
                      width="96.1304"
                      height="23.346"
                      fill="white"
                      transform="matrix(0.987606 -0.156951 -0.156951 -0.987606 3.66418 38.1797)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </li>
            <li>
              {/* <Link>Home</Link>
            <Link>About</Link> */}
              <p>Home</p>
              <p>About</p>
              <select name="" id="">
                <option value="">Service</option>
              </select>
              <p>Upcomming Packages</p>
            </li>
            <li>
              <button>Get in Touch</button>
            </li>
          </ul>
          <div className="main">
            <div className="main_fan">
              <div className="easy">
                <div className="words">
                  <img src={img2} alt="" />
                  <p>Date</p>
                </div>
                <div className="words">
                  <img src={img3} alt="" />
                  <p>price low to High</p>
                </div>
                <div className="words">
                  <img src={img4} alt="" />
                  <p>Price High to low</p>
                </div>
                <div className="words">
                  <img src={img5} alt="" />
                  <p>Name (A-z)</p>
                </div>
              </div>
              <Img_text />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default travel_exhibition;
