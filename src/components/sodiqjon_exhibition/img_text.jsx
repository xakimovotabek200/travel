import React from "react";
import img1 from "../img/6.png";
import img2 from "../img/7.png";
import img3 from "../img/8.png";
import img4 from "../img/9.png";
import img5 from "../img/10.png";
import img6 from "../img/11.png";
import img7 from "../img/12.png";
import img8 from "../img/13.png";
import img9 from "../img/14.png";
import img10 from "../img/16.svg";
import img11 from "../img/17.png";
import img12 from "../img/18.png";
import img13 from "../img/19.png";

function img_text() {
  return (
    <div className="img_text">
      <div className="imgs">
        <div className="img">
          <img src={img1} alt="" />
          <div className="months">
            <div>
              <img src={img2} alt="" />
              <p>12, September 2022</p>
            </div>
            <div>
              <img src={img3} alt="" />
              <p>120+ People</p>
            </div>
          </div>
          <div className="words">
            <h1>Switzerland</h1>
            <p>
              Qui tempore voluptate qui quia commodi rem praesentium alias et.
            </p>
            <div className="dollor">
              <p>1,100 $</p>
              <p>
                <img src={img4} alt="" />
                5.0
              </p>
            </div>
          </div>
        </div>
        <div className="img">
          <img src={img5} alt="" />
          <div className="months">
            <div>
              <img src={img2} alt="" />
              <p>12, September 2022</p>
            </div>
            <div>
              <img src={img3} alt="" />
              <p>120+ People</p>
            </div>
          </div>
          <div className="words">
            <h1>Berlin </h1>
            <p>
              Qui tempore voluptate qui quia commodi rem praesentium alias et.
            </p>
            <div className="dollor">
              <p>1,230 $</p>
              <p>
                <img src={img4} alt="" />
                4.9
              </p>
            </div>
          </div>
        </div>
        <div className="img">
          <img src={img6} alt="" />
          <div className="months">
            <div>
              <img src={img2} alt="" />
              <p>12, September 2022</p>
            </div>
            <div>
              <img src={img3} alt="" />
              <p>120+ People</p>
            </div>
          </div>
          <div className="words">
            <h1>Maldives</h1>
            <p>
              Qui tempore voluptate qui quia commodi rem praesentium alias et.
            </p>
            <div className="dollor">
              <p>3,000 $</p>
              <p>
                <img src={img4} alt="" />
                5.0
              </p>
            </div>
          </div>
        </div>
        <div className="img">
          <img src={img7} alt="" />
          <div className="months">
            <div>
              <img src={img2} alt="" />
              <p>12, September 2022</p>
            </div>
            <div>
              <img src={img3} alt="" />
              <p>120+ People</p>
            </div>
          </div>
          <div className="words">
            <h1>Torronto</h1>
            <p>
              Qui tempore voluptate qui quia commodi rem praesentium alias et.
            </p>
            <div className="dollor">
              <p>2,000 $</p>
              <p>
                <img src={img4} alt="" />
                4.6
              </p>
            </div>
          </div>
        </div>
        <div className="img">
          <img src={img8} alt="" />
          <div className="months">
            <div>
              <img src={img2} alt="" />
              <p>12, September 2022</p>
            </div>
            <div>
              <img src={img3} alt="" />
              <p>120+ People</p>
            </div>
          </div>
          <div className="words">
            <h1>Switzerland</h1>
            <p>
              Qui tempore voluptate qui quia commodi rem praesentium alias et.
            </p>
            <div className="dollor">
              <p>1,400 $</p>
              <p>
                <img src={img4} alt="" />
                5.0
              </p>
            </div>
          </div>
        </div>
        <div className="img">
          <img src={img9} alt="" />
          <div className="months">
            <div>
              <img src={img2} alt="" />
              <p>12, September 2022</p>
            </div>
            <div>
              <img src={img3} alt="" />
              <p>120+ People</p>
            </div>
          </div>
          <div className="words">
            <h1>Switzerland</h1>
            <p>
              Qui tempore voluptate qui quia commodi rem praesentium alias et.
            </p>
            <div className="dollor">
              <p>1,210 $</p>
              <p>
                <img src={img4} alt="" />
                4.0
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text">
        <div className="background">
          <div className="text_fan">
            <h1>Plan Your Trip</h1>
            <p>
              Ex optio sequi et quos praesentium in nostrum labore nam rerum
              iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.
            </p>
          </div>
         <div className="inputs">
         <div className="input">
            <img src={img10} alt="" />
            <input type="text" placeholder="Search Tour" />
          </div>
          <div className="input">
            <img src={img11} alt="" />
            <input type="text" placeholder="Where To?" />
          </div>
          <div className="input">
            <img src={img12} alt="" />
            <input type="text" placeholder="Date" />
          </div>
         </div>
         <div className="quit">
          <h1>Filter by price</h1>
          <div className="div_n1">
            <div className="small"></div>
            <div className="big"></div>
            <div className="small"></div>
          </div>
          <p>Price: $12 - $3600</p>
         </div>
         <div className="game_over">
          <img src={img13} alt="" />
         </div>
        </div>
      </div>
    </div>
  );
}

export default img_text;
