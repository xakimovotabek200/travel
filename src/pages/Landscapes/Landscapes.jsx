import "./Landscapes.css";
import React from "react";
import { Rate } from "antd";
import { Input } from "antd";
import { GrCircleInformation } from "react-icons/gr";
import { GrPlan } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TfiGallery } from "react-icons/tfi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import img1 from "../../img/Landscapes/273 1.png";
import img2 from "../../img/Landscapes/2.png";
import img3 from "../../img/Landscapes/3.png";
import img4 from "../../img/Landscapes/4.png";
import img5 from "../../img/Landscapes/5.png";
import img6 from "../../img/Landscapes/6.png";
import img7 from "../../img/Landscapes/7.png";

function Landscapes() {
  const { TextArea } = Input;
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <>
      <div>
        {" "}
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
        <div className="top-buttom">
          <div className="top-buttom-left">
            {" "}
            <div className="texts-1">
              <h1 className="text-1">Switzerland</h1>
              <h1 className="text-2">1,000 $</h1>
              <span className="span-1"> / </span>
              <h1 className="text-3">Per Couple</h1>
            </div>
            <div>
              <Rate />
              <h1 className="text-4">(2.3k review)</h1>
            </div>
            <div>
              <h1 className="text-5">
                Ex optio sequi et quos praesentium in nostrum labore nam rerum
                iusto aut magni nesciunt? Quo quidem neque iste expedita est
                dolor similique ut quasi maxime ut deserunt autem At praesentium
                voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis
                aut provident aliquam. Aut aspernatur consequuntur eum quaerat
                distinctio ut inventore aliquid et quasi alias ut rerum suscipit
                et nihil deleniti. Ex optio sequi et quos praesentium in nostrum
                labore nam rerum justo aut magni nesciunt? Quo quidem neque iste
                expedita est dolor similique ut quasi maxime ut deserunt autem
                At praesentium voluptatem aut libero nisi. Et eligendi sint ab
                cumque veritatis aut provident aliquam. Aut aspernatur
                consequuntur eum quaerat distinctio ut inventore aliquid et
                quasi alias ut rerum suscipit et nihil deleniti.
              </h1>
            </div>
            <div>
              <div>
                {" "}
                <h1 className="text-6">Destination</h1>{" "}
                <span className="span-2">: Zurich, Switzerland</span>
              </div>
              <div>
                {" "}
                <h1 className="text-6">Departure</h1>{" "}
                <span className="span-2">: Main Sqaure, New City</span>
              </div>{" "}
              <div>
                {" "}
                <h1 className="text-6">Departure Time</h1>
                <span className="span-2">: Approximately 08 : 10 AM</span>
              </div>
              <div>
                {" "}
                <h1 className="text-6">Return Time</h1>{" "}
                <span className="span-2">: Approximately 07 : 20 PM</span>
              </div>
              <div>
                {" "}
                <h1 className="text-6">Dress Code</h1>
                <span className="span-2">: Casual, comfortable and light</span>
              </div>
              <div>
                {" "}
                <div>
                  <h1 className="text-6">Not Included</h1>
                </div>
                <div>
                  <span className="span-2">
                    {" "}
                    <AiOutlineCloseCircle />
                    Gallery Ticket{" "}
                  </span>{" "}
                  <span>
                    {" "}
                    <AiOutlineCloseCircle /> Lunch
                  </span>
                </div>
              </div>{" "}
              <div>
                {" "}
                <div>
                  <h1 className="text-6">Included</h1>
                </div>
                <div>
                  <span className="span-2">
                    {" "}
                    <TiTickOutline />5 star Accomodations
                  </span>{" "}
                  <span className="span-2">
                    <TiTickOutline /> Airport Transfer
                  </span>{" "}
                  <span className="span-2">
                    {" "}
                    <TiTickOutline /> Breakfast
                  </span>{" "}
                  <span className="span-2">
                    {" "}
                    <TiTickOutline /> Personal Guide
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-7">From our gallery</h1>
              <p className="text-8">
                Ex optio sequi et quos praesentium in nostrum labore nam rerum
                iusto aut magni nesciunt? Quo quidem neque iste expedita est
                dolor similique ut quasi maxime ut deserunt autem At praesentium
                voluptatem aut libero nisi.{" "}
              </p>
            </div>
            <div className="img">
              <img src={img2} alt="1" /> <img src={img3} alt="2" />{" "}
              <img src={img4} alt="3" /> <img src={img5} alt="4" />{" "}
              <img src={img6} alt="5" /> <img src={img7} alt="6" />
            </div>
          </div>
          <div className="top-buttom-right">
            <div className="top-buttom-right-message">
              <div>
                {" "}
                <h1 className="text-9">Book This Tour </h1>
                <p className="text-10">
                  Ex optio sequi et quos praesentium in nostrum labore nam rerum
                  iusto aut magni nesciunt? Quo quidem neque iste expedita est
                  dolo.
                </p>
              </div>
              <div className="inputs-1">
                <Input placeholder=" Name" onChange={onChange} />{" "}
                <Input placeholder="Email" onChange={onChange} />{" "}
                <Input placeholder="Confirm Email" onChange={onChange} />{" "}
                <Input type="number" placeholder="Phone" onChange={onChange} />{" "}
                <Input
                  type="month"
                  placeholder="dd-mm-yy"
                  onChange={onChange}
                />{" "}
                <Input
                  type="number"
                  placeholder="Number of ticket"
                  onChange={onChange}
                />{" "}
                <TextArea
                  placeholder="Message"
                  onChange={onChange}
                  style={{ width: "281px", height: "56px" }}
                />
                <button className="button-1">Check Availability</button>
                <button className="button-1">Book Now</button>
              </div>
            </div>
            <div>
              <img src={img1} alt="7" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landscapes;
