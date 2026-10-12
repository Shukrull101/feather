import React from "react";
import Hero from "./sections/Hero.jsx";
import ShopByRoom from "./sections/ShopByRoom.jsx";
import Mission from "./sections/Mission.jsx";
import PromoSections from "./sections/PromoSections.jsx";
import "./Homepage.css";


export default function Homepage() {
  return (
    <div className="homepage" id="home">
      <Hero />
      <ShopByRoom />
      <Mission />
      <PromoSections />
   
    </div>
  );
}
