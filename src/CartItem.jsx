
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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

  if (items.length === 0) {
    return (
      <main className="cart-page">
        <div className="empty-cart">
          <div className="empty-cart-icon">🪴</div>
          <h1>Your cart is waiting to bloom!</h1>
          <p>You haven't added any plants to your cart yet.</p>
          <Link to="/products" className="primary-button">
            Explore Plants
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

        <Link to="/products" className="continue-link">
          ← Continue Shopping
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
                <p>₹{item.price} per plant</p>

                <div className="quantity-control">
                  <button
                    aria-label={`Decrease ${item.name} quantity`}
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity - 1,
                        })
                      )
                    }
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    aria-label={`Increase ${item.name} quantity`}
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1,
                        })
                      )
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-button"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Remove
                </button>
              </div>

              <strong className="item-subtotal">
                ₹{item.price * item.quantity}
              </strong>
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
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>

          <button
            className="primary-button checkout-button"
            onClick={() =>
              window.alert(
                'Thank you for shopping with Paradise Nursery! Checkout demo only.'
              )
            }
          >
            Proceed to Checkout
          </button>

          <p className="checkout-note">
            This is a student project demo. No payment will be taken.
          </p>
        </aside>
      </div>
    </main>
  );
}

export default CartItem;
