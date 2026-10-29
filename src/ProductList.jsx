
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from './CartSlice';

const products = [
  {
    id: 1,
    name: 'Snake Plant',
    category: 'Air Purifying',
    price: 299,
    image: 'photo-1501004318641-b39e6451bec6',
    description: 'A hardy indoor plant that adds a fresh touch.',
  },
  {
    id: 2,
    name: 'Peace Lily',
    category: 'Flowering',
    price: 399,
    image: 'photo-1497250681960-ef046c08a56e',
    description: 'An elegant plant with beautiful green leaves.',
  },
  {
    id: 3,
    name: 'Monstera Deliciosa',
    category: 'Tropical',
    price: 599,
    image: 'photo-1485955900006-10f4d324d411',
    description: 'A tropical favourite with striking foliage.',
  },
  {
    id: 4,
    name: 'Aloe Vera',
    category: 'Succulents',
    price: 249,
    image: 'photo-1509423350716-97f9360b4e09',
    description: 'An easy-care succulent for sunny spaces.',
  },
  {
    id: 5,
    name: 'Golden Pothos',
    category: 'Hanging Plants',
    price: 199,
    image: 'photo-1459156212016-c812468e2115',
    description: 'A trailing plant that brightens any corner.',
  },
  {
    id: 6,
    name: 'Rubber Plant',
    category: 'Indoor Plants',
    price: 449,
    image: 'photo-1509423350716-97f9360b4e09',
    description: 'Glossy leaves make this plant a bold choice.',
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <main className="products-page">
      <div className="products-heading">
        <div>
          <p className="eyebrow">OUR GREEN COLLECTION</p>
          <h1>Find Your Perfect Plant</h1>
          <p>Bring a little more nature into your everyday life.</p>
        </div>

        <Link className="cart-link" to="/cart">
          🛒 Cart ({cartCount})
        </Link>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <img
              className="product-image"
              src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=700&q=80`}
              alt={product.name}
              loading="lazy"
            />

            <div className="product-details">
              <span className="product-category">{product.category}</span>
              <h2>{product.name}</h2>
              <p>{product.description}</p>

              <div className="product-footer">
                <strong>₹{product.price}</strong>
                <button
                  className="primary-button"
                  onClick={() => dispatch(addItem(product))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default ProductList;
