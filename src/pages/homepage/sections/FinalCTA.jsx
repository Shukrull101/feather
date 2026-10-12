import Reveal from "./Reveal";
import illustration from "../../../shared/assets/Floyd.png";

export default function FinalCTA() {
  return (
    <section className="cta">
      <div className="cta-inner">
        <Reveal>
          <img className="cta-img" src={illustration} alt="" loading="lazy" />
        </Reveal>
        <Reveal delay={150}>
          <p className="cta-text">Feather is the stress-free way to furnish your home</p>
        </Reveal>
        <Reveal delay={300}>
          <a href="#" className="cta-btn">Shop Furniture</a>
        </Reveal>
      </div>
    </section>
  );
}