
import React from "react";
import { ArrowUpRight } from "lucide-react";
import "./sections.css";

import livingRoomImg from "../../../shared/assets/living.jpg";
import bedroomImg from "../../../shared/assets/bedroom.jpg";
import officeImg from "../../../shared/assets/office.jpg";
import garageImg from "../../../shared/assets/garage.jpg";
export const roomsData = [
  {
    name: "Living Room",
    img: livingRoomImg,
    color: "#b9b2e8",
  },
  {
    name: "Garage ",
    img: garageImg,
    color: "#d9cf47",
  },
  {
    name: "Home Office",
    img: officeImg,
    color: "#9acbbd",
  },
  {
    name: "Cozy Bedroom",
    img: bedroomImg,
    color: "#d65332",
  },
];
export default function PromoSections() {
  return (
    <section className="promo-section">
      <div className="promo-grid">
        <div className="promo-copy">
          <h2>
            Enjoy a fully furnished
            <br className="desktop-break" /> space in less than a week
          </h2>
          <p>
            Feather furniture is available to be delivered and assembled in New
            York City, Los Angeles and San Francisco.
          </p>
          <a className="orange-link" href="#bestsellers">
            Explore Furniture <ArrowUpRight size={13} />
          </a>
        </div>
        <img
          className="promo-image"
          src={livingRoomImg}
          alt="Bright living room with curated furniture"
        />
        <div className="garage-poster" id="garage">
          <img
            src={garageImg}
            alt="Comfortable sofa from the Feather garage sale"
          />
          <div>
            <h3>Garage Sale Now Open</h3>
            <p>Save over 40% on favorite furniture.</p>
          </div>
        </div>
        <div className="promo-copy">
          <h2>Garage Sale - 40% &amp; Up</h2>
          <p>
            Our Garage Sale is open! Savings start at 40% on favorite retired
            pieces. Find dressers, sofas, decor, and more to make the year one
            to remember.
          </p>
          <p>
            Terms and conditions apply. <a href="#footer">View here.</a>
          </p>
          <a className="orange-link" href="#bestsellers">
            Shop Now <ArrowUpRight size={13} />
          </a>
        </div>
        <div className="promo-copy" id="business">
          <h2>
            Furniture for business,
            <br className="desktop-break" /> made simple.
          </h2>
          <p>
            Say goodbye to cost, complexity, and commitment of furniture.
            Feather makes it easy with affordable rental plans, white-glove
            delivery and best-in-class account service.
          </p>
          <a className="orange-link" href="#footer">
            Visit Feather for Business <ArrowUpRight size={13} />
          </a>
        </div>
        <div className="business-images">
          <div>
            <img src={livingRoomImg} alt="Residential furniture setup" />
            <span>Residential</span>
          </div>
          <div>
            <img src={officeImg}   alt="Modern office furniture" />
            <span>Office</span>
          </div>
        </div>
        <img
          className="promo-image last-promo-image"
          src={bedroomImg}
          alt="Relaxing furnished room"
        />
        <div className="promo-copy">
          <h2>
            Never assemble furniture
            <br className="desktop-break" /> again.
          </h2>
          <p>
            We move it all. There are countless floor plans and room-mates (oh,
            and your moving boxes) between here and there. With Feather,
            furnishing your space without breaking a sweat or figuring out
            instructions is easy.
          </p>
          <a className="orange-link" href="#why-feather">
            How Feather Works <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
