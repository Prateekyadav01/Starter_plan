import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
const Cart = () => {
  const cart = useSelector(state => state.cart);
  console.log(cart)
  return <div>
    <div><h1>Cart</h1></div>
     
     <div>
      {
        cart && cart.length>0 ? (<div>
          {
            cart.map((item)=>(
              <CartItem key={item.id} item = {item}/>
            ))
          }
          </div>) :(
          <div>
            <h3>Cart is empty</h3>
          </div>
        )
      }
     </div>

  </div>;
};

export default Cart;
