import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
const Cart = () => {
  const cart = useSelector(state => state.cart);
  console.log(cart)
  return <div>
   

    <div>
      {
        cart && cart.length > 0 ? (<div>
          {
            cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))
          }
          <div>
            <h1>
              Cart
            </h1>
            <p>Total</p>
          </div>
        </div>) : (
          <div>
            <h3>Cart is empty</h3>
            <Link to={"/"}>
              <button>Continue Shopping</button>
            </Link>
          </div>
        )
      }
    </div>

  </div>;
};

export default Cart;
