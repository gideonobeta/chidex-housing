
import "./App.css";

const properties = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    imageClass: "property-one",
    tag: "Featured",
    location: "Lekki Phase 1, Lagos",
    name: "Contemporary family home",
    details: ["4 bedrooms", "3 bathrooms", "Detached"],
    price: "₦185,000,000",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
    imageClass: "property-two",
    tag: "New listing",
    location: "Ikeja GRA, Lagos",
    name: "Garden terrace residence",
    details: ["3 bedrooms", "3 bathrooms", "Terrace"],
    price: "₦92,000,000",
  },
  {
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
    imageClass: "property-three",
    tag: "Ready to move in",
    location: "Victoria Island, Lagos",
    name: "Modern city apartment",
    details: ["2 bedrooms", "2 bathrooms", "Apartment"],
    price: "₦78,000,000",
  },
];

function Logo({ footer = false }) {
  return (
    <a
      className={`brand${footer ? " footer-brand" : ""}`}
      href="#top"
      aria-label="Chidex Housing and Property home"
    >
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 48 48">
          <path d="M5 22.5 24 7l19 15.5" />
          <path d="M11 20v21h26V20" />
          <path d="M20 41V27h9v14" />
          <path d="M16 24h4" />
          <path d="M29 24h4" />
        </svg>
      </span>
      <span className="brand-name">
        <strong>CHIDEX</strong>
        <small>HOUSING AND PROPERTY</small>
      </span>
    </a>
  );
}

function PropertyCard({ property }) {
  return (
    <article className="property-card">
      <a
        href="#contact"
        className={`property-image ${property.imageClass}`}
        style={{ backgroundImage: `url("${property.image}")` }}
        aria-label={`Enquire about ${property.name}`}
      >
        <span className="property-tag">{property.tag}</span>
        <span className="save-button" aria-hidden="true">♡</span>
      </a>

      <div className="property-info">
        <div className="property-location">
          <span aria-hidden="true">⌖</span> {property.location}
        </div>
        <h3>{property.name}</h3>
        <div className="property-details">
          {property.details.map((detail) => <span key={detail}>{detail}</span>)}
        </div>
        <div className="property-footer">
          <strong>{property.price}</strong>
          <a href="#contact" aria-label={`Enquire about ${property.name}`}>↗</a>
        </div>
      </div>
    </article>
  );
}
export default function App(){
  return (
    <>
      <header className="site-header">
        <Logo />

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#homes">Properties</a>
          <a href="#about">About us</a>
          <a href="#services">Our services</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href="#contact">
          Book a consultation <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero">
          <div
            className="hero-image"
            role="img"
            aria-label="Modern home surrounded by trees"
          />
          <div className="hero-shade" />

          <div className="hero-content">
            <p className="eyebrow light-eyebrow"><span /> A better place to begin</p>
            <h1>Find a home<br />that feels like <em>yours.</em></h1>
            <p className="hero-description">
              Thoughtfully selected homes and property opportunities to help
              you make your next move with confidence.
            </p>
            <a className="button button-gold" href="#homes">
              Explore properties <span>↗</span>
            </a>
          </div>

          <div className="hero-note">
            <span className="note-line" />
            <p>Homes selected with care.<br /><strong>Service built around you.</strong></p>
          </div>

          <form className="search-panel" action="#homes">
            <label className="search-field">
              <span>Location</span>
              <select name="location" defaultValue="" aria-label="Choose a location">
                <option value="">Choose an area</option>
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Port Harcourt</option>
              </select>
            </label>

            <label className="search-field">
              <span>Property type</span>
              <select name="type" defaultValue="" aria-label="Choose a property type">
                <option value="">Any property</option>
                <option>Detached house</option>
                <option>Apartment</option>
                <option>Terrace house</option>
              </select>
            </label>

            <label className="search-field">
              <span>Price range</span>
              <select name="price" defaultValue="" aria-label="Choose a price range">
                <option value="">Any price</option>
                <option>Under ₦50m</option>
                <option>₦50m – ₦100m</option>
                <option>Over ₦100m</option>
              </select>
            </label>

            <button className="search-button" type="submit">
              <span aria-hidden="true">⌕</span> Find a home
            </button>
          </form>
        </section>

        <section className="intro section-wrap" id="about">
          <div className="intro-label">
            <span className="section-number">01</span>
            <span className="eyebrow">Welcome to Chidex</span>
          </div>

          <div className="intro-copy">
            <h2>Property decisions deserve<br />a more <em>personal touch.</em></h2>
            <p>
              Finding the right property is about more than the building. It’s
              about your plans, your priorities, and the life you want to
              create. Our team helps you explore your options, ask the right
              questions, and take your next step with clarity.
            </p>
            <a className="text-link" href="#services">Get to know us <span>↗</span></a>
          </div>

          <div className="intro-stamp" aria-label="Homes, handled with care">
            <span>HOMES</span>
            <span className="stamp-house" aria-hidden="true">⌂</span>
            <span>HANDLED WITH CARE</span>
          </div>
        </section>

        <section className="properties section-wrap" id="homes">
          <div className="section-heading">
            <div>
              <div className="intro-label">
                <span className="section-number">02</span>
                <span className="eyebrow">A place to call yours</span>
              </div>
              <h2>Featured <em>properties</em></h2>
            </div>
            <a className="text-link" href="#contact">View all properties <span>↗</span></a>
          </div>

          <div className="property-grid">
            {properties.map((property) => (
              <PropertyCard key={property.name} property={property} />
            ))}
          </div>
        </section>

        <section className="services" id="services">
          <div className="services-inner section-wrap">
            <div className="services-heading">
              <div className="intro-label">
                <span className="section-number">03</span>
                <span className="eyebrow">How we can help</span>
              </div>
              <h2>Good guidance.<br /><em>Better decisions.</em></h2>
              <p>
                From first viewing to final paperwork, we’re here to make the
                process feel simpler.
              </p>
            </div>

            <div className="service-list">
              <article className="service-item">
                <span className="service-number">01</span>
                <div>
                  <h3>Property sales</h3>
                  <p>Explore homes and property opportunities that fit your plans.</p>
                </div>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </article>

              <article className="service-item">
                <span className="service-number">02</span>
                <div>
                  <h3>Property search</h3>
                  <p>Get personal support as you compare locations, features, and options.</p>
                </div>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </article>

              <article className="service-item">
                <span className="service-number">03</span>
                <div>
                  <h3>Sales guidance</h3>
                  <p>Get help preparing, presenting, and marketing your property.</p>
                </div>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </article>
            </div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div>
            <p className="eyebrow">Your next step starts here</p>
            <h2>Let’s find the right<br /><em>place for you.</em></h2>
          </div>

          <div className="contact-action">
            <p>
              Tell us what you’re looking for. Our team will be happy to help
              you explore your options.
            </p>
            <a className="button button-dark" href="mailto:hello@chidexhousing.com">
              Talk to our team <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <Logo footer />
        <p>© 2026 Chidex Housing and Property. All rights reserved.</p>
        <a href="#top" className="back-top">Back to top ↑</a>
      </footer>
    </>
  );
}
