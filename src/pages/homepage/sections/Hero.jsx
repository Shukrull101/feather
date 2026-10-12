import React from "react";
import { ArrowRight } from "lucide-react";
import "./sections.css";
import heroImg from "../../../shared/assets/hero.jpg"


export default function Hero() {
  return (
    <section
      className="hero-section cream-section"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">
        <h1 id="hero-title">
          Curated and
          <br />
          Convenient
        </h1>
        <p>
          We've built our offerings on the principle that everyone deserves
          high-quality design without the high cost. We offer elevated rental
          inventory to transform your space. Reuse and recycle — we make the
          decision as light as a “feather.”
        </p>
        <a className="pill-button" href="#bestsellers">
          Get Started <ArrowRight size={14} />
        </a>
      </div>
      <div className="hero-image">
        <img
          src={heroImg}
          alt="Bright, thoughtfully furnished modern living room"
        />
      </div>
    </section>
  );
}
