import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
const CartItem = ({item}) => {
  const [total , setTotal] = useState(0);
  const dispatch = useDispatch();
  const handleRemove =()=>{
    dispatch(remove(item.id));
  }
  return <div>
    <div>
        <div>
          <img className="w-[200px] h-10" src={item.image} alt="no image" />
        </div>
        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div>
            <p>Price: ${item.price}</p>
            <div onClick={handleRemove}>
            <MdDelete />
            </div>
          </div>
        </div>
    </div>
    <hr />
    
  </div>;
};

export default CartItem;
