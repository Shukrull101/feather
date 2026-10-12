import Reveal from "./Reveal";
import table from "../../../shared/assets/cooper-dining-table.png";
import console_ from "../../../shared/assets/croft-media-console.png";
import chair from "../../../shared/assets/essex-dining-chair.png";
import sofa from "../../../shared/assets/ludlow-sofa.png";
import style from "./sections.css";

const products = [
  { name: "Cooper Dining Table", img: table, rent: 15, price: 359, sale: 314 },
  { name: "Croft Media Console", img: console_, rent: 35, price: 839, sale: 739 },
  { name: "Essex Dining Chair", img: chair, rent: 18, price: 429, sale: 379 },
  { name: "Ludlow Sofa", img: sofa, rent: 52, price: 1249, sale: 1099 },
];

export default function Bestsellers() {
  return (
    <section className="bs">
      <Reveal>
        <h2 className="bs-title">Shop our Bestsellers</h2>
      </Reveal>

      <div className="bs-grid">
        {products.map((p, i) => (
          <Reveal key={p.name} delay={i * 100}>
            <article className="bs-card">
              <div className="bs-imgwrap">
                <img className="bs-img" src={p.img} alt={p.name} loading="lazy" />
              </div>
              <h3 className="bs-name">{p.name}</h3>
              <p className="bs-text">
                rent for <span className="bs-accent">${p.rent}</span>/mo
              </p>
              <p className="bs-text">
                or buy for <span className="bs-old">${p.price}</span>
              </p>
              <p className="bs-sale">${p.sale}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="bs-more">
          <a href="#" className="bs-link">Shop All Furniture</a>
        </div>
      </Reveal>
    </section>
  );
}