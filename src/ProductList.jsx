import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from './CartSlice';

const products = [
  {
    id: 1,
    name: 'Snake Plant',
    category: 'Air Purifying Plants',
    price: 299,
    image: 'photo-1501004318641-b39e6451bec6',
    description: 'A hardy indoor plant that helps freshen your space.',
  },
  {
    id: 2,
    name: 'Peace Lily',
    category: 'Air Purifying Plants',
    price: 399,
    image: 'photo-1497250681960-ef046c08a56e',
    description: 'An elegant green plant for your home.',
  },
  {
    id: 3,
    name: 'Spider Plant',
    category: 'Air Purifying Plants',
    price: 249,
    image: 'photo-1459156212016-c812468e2115',
    description: 'An easy-care plant for bright indoor spaces.',
  },
  {
    id: 4,
    name: 'Lavender',
    category: 'Aromatic Plants',
    price: 349,
    image: 'photo-1499002238440-d264edd596ec',
    description: 'A fragrant plant with a calming aroma.',
  },
  {
    id: 5,
    name: 'Jasmine',
    category: 'Aromatic Plants',
    price: 299,
    image: 'photo-1490750967868-88aa4486c946',
    description: 'A beautiful flowering plant with a sweet fragrance.',
  },
  {
    id: 6,
    name: 'Rosemary',
    category: 'Aromatic Plants',
    price: 279,
    image: 'photo-1501004318641-b39e6451bec6',
    description: 'An aromatic herb for your sunny windowsill.',
  },
  {
    id: 7,
    name: 'Citronella Plant',
    category: 'Insect Repellent Plants',
    price: 329,
    image: 'photo-1485955900006-10f4d324d411',
    description: 'A fragrant plant often used outdoors.',
  },
  {
    id: 8,
    name: 'Mint Plant',
    category: 'Insect Repellent Plants',
    price: 199,
    image: 'photo-1466692476868-aef1dfb1e735',
    description: 'A refreshing herb for pots and gardens.',
  },
  {
    id: 9,
    name: 'Marigold',
    category: 'Insect Repellent Plants',
    price: 179,
    image: 'photo-1490750967868-88aa4486c946',
    description: 'A colourful flowering plant for outdoor spaces.',
  },
];

const categories = [
  'Air Purifying Plants',
  'Aromatic Plants',
  'Insect Repellent Plants',
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const isInCart = (productId) =>
    cartItems.some((item) => item.id === productId);

  const handleAddToCart = (product) => {
    if (!isInCart(product.id)) {
      dispatch(addItem(product));
    }
  };

  return (
    <main className="products-page product-list-container">
      <div className="products-heading">
        <div>
          <p className="eyebrow">OUR GREEN COLLECTION</p>
          <h1>Paradise Nursery Plants</h1>
          <p>Find the perfect plants for your home and garden.</p>
        </div>

        <Link className="cart-link" to="/cart" aria-label={`Shopping cart with ${cartCount} items`}>
          🛒 Cart ({cartCount})
        </Link>
      </div>

      <div className="product-list">
        {categories.map((category) => (
          <section className="product-category-section" key={category}>
            <h2>{category}</h2>

            <div className="product-grid">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <article className="product-card" key={product.id}>
                    <img
                      className="product-image"
                      src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=700&q=80`}
                      alt={product.name}
                      loading="lazy"
                    />

                    <div className="product-details">
                      <span className="product-category">
                        {product.category}
                      </span>

                      <h3 className="product-title">{product.name}</h3>
                      <p>{product.description}</p>

                      <div className="product-footer">
                        <strong className="product-price">
                          ₹{product.price}
                        </strong>

                        <button
                          type="button"
                          className="primary-button add-to-cart-button"
                          onClick={() => handleAddToCart(product)}
                          disabled={isInCart(product.id)}
                        >
                          {isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

export default ProductList;