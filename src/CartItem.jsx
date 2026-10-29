import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Increase the quantity of a cart item
  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  // Decrease quantity or remove the item when quantity reaches zero
  const handleDecrement = (item) => {
    if (item.quantity <= 1) {
      dispatch(removeItem(item.name));
    } else {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  // Remove a plant from the cart
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  if (items.length === 0) {
    return (
      <main className="cart-page">
        <div className="empty-cart">
          <div className="empty-cart-icon">🪴</div>
          <h1>Your cart is waiting to bloom!</h1>
          <p>You haven't added any plants to your cart yet.</p>
          <Link to="/products" className="primary-button">
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-heading">
        <div>
          <p className="eyebrow">YOUR SELECTION</p>
          <h1>Shopping Cart</h1>
          <p>{totalItems} plant(s) in your cart</p>
        </div>

        <Link to="/products" className="primary-button">
          Continue Shopping
        </Link>
      </div>

      <div className="cart-layout">
        <section className="cart-items">
          {items.map((item) => (
            <article className="cart-item" key={item.id}>
              <img
                src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=300&q=80`}
                alt={item.name}
              />

              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>Unit Price: ₹{item.price}</p>

                <div className="quantity-control">
                  <button
                    aria-label={`Decrease ${item.name} quantity`}
                    onClick={() => handleDecrement(item)}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    aria-label={`Increase ${item.name} quantity`}
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>

                <p>
                  Item Subtotal: ₹{item.price * item.quantity}
                </p>

                <button
                  className="remove-button"
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </section>

        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Total plants</span>
            <span>{totalItems}</span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{totalPrice}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span>Free</span>
          </div>

          <hr />

          <div className="summary-row summary-total">
            <span>Total Amount</span>
            <span>₹{totalPrice}</span>
          </div>

          <button
            className="primary-button checkout-button"
            onClick={() =>
              window.alert('Coming Soon! Checkout will be available soon.')
            }
          >
            Checkout
          </button>

          <p className="checkout-note">
            Student project demo. No payment will be taken.
          </p>
        </aside>
      </div>
    </main>
  );
}

export default CartItem;