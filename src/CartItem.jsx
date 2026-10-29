import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

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

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    navigate('/products');
  };

  if (items.length === 0) {
    return (
      <main className="cart-page">
        <div className="empty-cart">
          <div className="empty-cart-icon">🪴</div>
          <h1>Your cart is waiting to bloom!</h1>
          <p>You haven't added any plants to your cart yet.</p>

          <button
            type="button"
            className="get-started-button"
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </button>
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

        <button
          type="button"
          className="get-started-button"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>
      </div>

      <div className="cart-layout">
        <section className="cart-container">
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
                    type="button"
                    aria-label={`Decrease ${item.name} quantity`}
                    onClick={() => handleDecrement(item)}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    type="button"
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
                  type="button"
                  className="cart-item-delete"
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
            type="button"
            className="get-started-button1"
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