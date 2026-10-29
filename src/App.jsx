
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function Home() {
  return (
    <>
      <main className="hero">
        <div className="hero-content">
          <p className="eyebrow">BRING NATURE HOME</p>
          <h1>Paradise Nursery</h1>
          <p>
            Discover beautiful indoor plants and bring freshness,
            peace, and natural beauty into your home.
          </p>
          <Link to="/products" className="primary-button hero-button">
            Get Started →
          </Link>
        </div>
      </main>

      <section className="intro" id="about">
        <p className="eyebrow">A LITTLE MORE GREEN</p>
        <h2>Grow Your Own Paradise</h2>
        <p>
          Find the perfect plants to make every space greener,
          happier, and more beautiful.
        </p>
        <Link to="/about" className="text-link">
          Learn About Us →
        </Link>
      </section>
    </>
  );
}

function App() {
  const items = useSelector((state) => state.cart.items);
  const cartCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="app">
      <header className="navbar">
        <Link to="/" className="logo">
          🌿 Paradise Nursery
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/products">Plants</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/cart" className="nav-cart">
            🛒 Cart ({cartCount})
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="*"
          element={
            <main className="not-found">
              <h1>Page not found</h1>
              <Link to="/">Return Home</Link>
            </main>
          }
        />
      </Routes>

      <footer className="footer">
        <Link to="/" className="footer-logo">🌿 Paradise Nursery</Link>
        <p>Bringing nature closer to your home.</p>
        <p>© {new Date().getFullYear()} Paradise Nursery · Student Project</p>
      </footer>
    </div>
  );
}

export default App;
