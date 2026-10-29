
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="eyebrow">OUR STORY</p>
        <h1>Helping You Grow a Greener Life</h1>
        <p>
          At Paradise Nursery, we believe every plant brings a little
          happiness, calm, and beauty into our lives.
        </p>
      </section>

      <section className="about-content">
        <div>
          <h2>Who We Are</h2>
          <p>
            Paradise Nursery is a plant shop project created to help
            plant lovers discover beautiful indoor and outdoor plants.
            We want to make choosing plants simple and enjoyable.
          </p>
        </div>

        <div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to inspire greener homes by making it easy
            for everyone to explore plants and find the right ones
            for their spaces.
          </p>
        </div>

        <div>
          <h2>Why Paradise Nursery?</h2>
          <ul>
            <li>A curated collection of plants</li>
            <li>A simple and convenient shopping experience</li>
            <li>An easy-to-use shopping cart</li>
            <li>A greener lifestyle for every home</li>
          </ul>
        </div>

        <Link to="/products" className="primary-button">
          Explore Our Plants
        </Link>
      </section>
    </main>
  );
}

export default AboutUs;
