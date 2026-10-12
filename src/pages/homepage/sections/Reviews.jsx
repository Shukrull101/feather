import Reveal from "./Reveal";

const reviews = [
  { text: "Honestly BEST EXPERIENCE moving ever.", author: "Julie, San Francisco, CA", color: "violet" },
  { text: "Extremely easy! Browsed for furniture and it was in my new apartment within a week.", author: "Anthony, Los Angeles, CA", color: "yellow" },
  { text: "THIS JUST MAKES SENSE. Truly obsessed with Feather.", author: "Wesley, New York City, NY", color: "green" },
];

export default function Reviews() {
  return (
    <section className="rw">
      <Reveal>
        <h2 className="rw-title">The Reviews are In</h2>
      </Reveal>

      <div className="rw-grid">
        {reviews.map((r, i) => (
          <Reveal key={r.author} delay={i * 150}>
            <figure className={`rw-card rw-card--${r.color}`}>
              <div>
                <div className="rw-stars" aria-label="5 stars">★★★★★</div>
                <blockquote className="rw-text">{r.text}</blockquote>
              </div>
              <figcaption className="rw-author">— {r.author}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}