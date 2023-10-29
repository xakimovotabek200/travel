import "./Landscapes.css";
import React from "react";
import { Rate } from "antd";
import { Input } from "antd";
import { GrCircleInformation } from "react-icons/gr";
import { GrPlan } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TfiGallery } from "react-icons/tfi";

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
        <div className="top-buttom-left">
          {" "}
          <div>
            <h1>Switzerland</h1>
            <h1>1,000 $</h1>
            <span>/</span>
            <h1>Per Couple</h1>
          </div>
          <div>
            <Rate />
            <h1>(2.3k review)</h1>
          </div>
          <div>
            <h1>
              Ex optio sequi et quos praesentium in nostrum labore nam rerum
              iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor
              similique ut quasi maxime ut deserunt autem At praesentium
              voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis
              aut provident aliquam. Aut aspernatur consequuntur eum quaerat
              distinctio ut inventore aliquid et quasi alias ut rerum suscipit
              et nihil deleniti. Ex optio sequi et quos praesentium in nostrum
              labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste
              expedita est dolor similique ut quasi maxime ut deserunt autem At
              praesentium voluptatem aut libero nisi. Et eligendi sint ab cumque
              veritatis aut provident aliquam. Aut aspernatur consequuntur eum
              quaerat distinctio ut inventore aliquid et quasi alias ut rerum
              suscipit et nihil deleniti.
            </h1>
          </div>
          <div>
            <div>
              {" "}
              <h1>Destination</h1> <span>: Zurich, Switzerland</span>
            </div>
            <div>
              {" "}
              <h1>Departure</h1> <span>: Main Sqaure, New City</span>
            </div>{" "}
            <div>
              {" "}
              <h1>Departure Time</h1>
              <span>: Approximately 08 : 10 AM</span>
            </div>
            <div>
              {" "}
              <h1>Return Time</h1> <span>: Approximately 07 : 20 PM</span>
            </div>
            <div>
              {" "}
              <h1>Dress Code</h1>
              <span>: Casual, comfortable and light</span>
            </div>
            <div>
              {" "}
              <div>
                <h1>Not Included</h1>
              </div>
              <div>
                <span>Gallery Ticket </span> <span>Lunch</span>
              </div>
            </div>{" "}
            <div>
              {" "}
              <div>
                <h1>Included</h1>
              </div>
              <div>
                <span>5 star Accomodations</span> <span>Airport Transfer</span>{" "}
                <span>Breakfast</span> <span>Personal Guide</span>
              </div>
            </div>
          </div>
          <div>
            <h1>From our gallery</h1>
            <p>
              Ex optio sequi et quos praesentium in nostrum labore nam rerum
              iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor
              similique ut quasi maxime ut deserunt autem At praesentium
              voluptatem aut libero nisi.{" "}
            </p>
          </div>
          <div className="img">
            <img src="" alt="1" /> <img src="" alt="2" /> <img src="" alt="3" />{" "}
            <img src="" alt="4" /> <img src="" alt="5" /> <img src="" alt="6" />
          </div>
        </div>
        <div className="top-buttom-right">
          <div>
            {" "}
            <h1>Book This Tour </h1>
            <p>
              Ex optio sequi et quos praesentium in nostrum labore nam rerum
              iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.
            </p>
          </div>
          <div>
            <Input placeholder="Name" onChange={onChange} />{" "}
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
            <Input placeholder="Name" onChange={onChange} />
            <TextArea placeholder="Message" onChange={onChange} />
            <button>Check Availability</button>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landscapes;
