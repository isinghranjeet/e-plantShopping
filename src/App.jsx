import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function Home() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your destination for beautiful
          indoor plants. Bring nature into your home with our collection
          of plants.
        </p>

        <Link
          to="/products"
          className="get-started-button"
        >
          Get Started
        </Link>
      </div>
    </main>
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
        <Link to="/" className="footer-logo">
          🌿 Paradise Nursery
        </Link>
        <p>Bringing nature closer to your home.</p>
        <p>
          © {new Date().getFullYear()} Paradise Nursery · Student Project
        </p>
      </footer>
    </div>
  );
}

export default App;