
import React, { useState } from 'react';
import './Footer.css';

const groups = [
  {
    title: 'FURNITURE',
    links: [
      'Packages', 'Living Room', 'Bedroom', 'Dining',
      'Home Office', 'Decor', 'Lighting', 'Outdoor',
      'All Furniture', 'Garage Sale',
    ],
  },
  {
    title: 'ABOUT',
    links: [
      'How it Works', 'About Feather', 'Feather Reviews',
      'Feather for Business', 'Partners', 'Affiliate Program',
      'Careers', 'In Your Area',
    ],
  },
  {
    title: 'HELP',
    links: [
      'FAQs', 'Contact Us', 'Privacy Policy', 'Terms',
      'Accessibility', 'FloorFound Terms',
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [openGroup, setOpenGroup] = useState(-1);

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-grid">
        {groups.map((group, i) => (
          <section
            className={`footer-column ${
              openGroup === i ? 'footer-open' : ''
            }`}
            key={group.title}
          >
            <button
              type="button"
              className="footer-heading"
              onClick={() =>
                setOpenGroup(openGroup === i ? -1 : i)
              }
            >
              {group.title}
              <span className="footer-toggle">
                {openGroup === i ? '−' : '+'}
              </span>
            </button>

            <ul>
              {group.links.map((link) => (
                <li key={link}>
                  <a
                    href={
                      link.includes('Business')
                        ? '#business'
                        : link.includes('Garage')
                          ? '#garage'
                          : link.includes('Reviews')
                            ? '#reviews'
                            : '#bestsellers'
                    }
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="footer-social">
          <h3>FEATHER ON SOCIAL MEDIA</h3>

          <div className="social-links">
            <a
              href="mailto:hello@livefeather.com"
              aria-label="Email"
            >
              ✉
            </a>
            <a
              href="https://pinterest.com"
              aria-label="Pinterest"
              className="social-letter"
            >
              p
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="social-letter"
            >
              𝕏
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="social-letter"
            >
              ◎
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="social-letter"
            >
              in
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="social-letter"
            >
              f
            </a>
          </div>

          <h3 className="newsletter-title">
            JOIN OUR NEWSLETTER
          </h3>

          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(true);
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setSubscribed(false);
              }}
              placeholder="Your email address"
              aria-label="Email address"
            />

            <button type="submit" aria-label="Subscribe">
              <span>→</span>
            </button>
          </form>

          {subscribed && (
            <p className="subscribe-success">
              Thanks for subscribing!
            </p>
          )}
        </section>
      </div>

      <a
        href="#home"
        className="footer-mark"
        aria-label="Back to top"
      >
        <span />
      </a>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Feather. Furnish your life.
      </div>
    </footer>
  );
}
