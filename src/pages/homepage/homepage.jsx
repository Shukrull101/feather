import React from "react";
import Hero from "./sections/Hero.jsx";
import ShopByRoom from "./sections/ShopByRoom.jsx";
import Mission from "./sections/Mission.jsx";
import PromoSections from "./sections/PromoSections.jsx";
import "./Homepage.css";
import Bestsellers from "./sections/Bestsellers.jsx";
import FloydBanner from "./sections/FloydBanner.jsx";
import Reviews from "./sections/Reviews.jsx";
import PressSection from "./sections/PressSection.jsx";
import FinalCTA from "./sections/FinalCTA.jsx";


export default function Homepage() {
  return (
    <div className="homepage" id="home">
      <Hero />
      <ShopByRoom />
      <Mission />
      <PromoSections />
      <Bestsellers /> 
      <FloydBanner /> 
      <Reviews />
     <PressSection  />
     <FinalCTA /> 

   
    </div>
  );
}
