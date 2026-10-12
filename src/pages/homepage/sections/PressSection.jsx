import Reveal from "./Reveal";
import logo5 from "../../../shared/assets/logo-5.png";
import logo6 from "../../../shared/assets/logo-6.png";
import logo7 from "../../../shared/assets/logo-7.png";
import logo8 from "../../../shared/assets/logo-8.png";
import logo9 from "../../../shared/assets/logo-9.png";

const logos = [
  { src: logo5, alt: "PureWow" },
  { src: logo6, alt: "MyDomaine" },
  { src: logo7, alt: "mindbodygreen" },
  { src: logo8, alt: "Forbes" },
  { src: logo9, alt: "Fast Company" },
];

export default function PressSection() {
  return (
    <section className="ps">
      <div className="ps-inner">
        <Reveal>
          <h2 className="ps-title">Ease the pain of moving from apartment to apartment.</h2>
        </Reveal>

        <div className="ps-logos">
          {logos.map((l, i) => (
            <Reveal key={l.alt} delay={i * 100}>
              <img className="ps-logo" src={l.src} alt={l.alt} loading="lazy" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}