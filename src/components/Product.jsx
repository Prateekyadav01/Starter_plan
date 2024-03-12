import toast, { Toaster } from "react-hot-toast";
import { useSelector,useDispatch } from "react-redux";
import {add , remove} from "../redux/Slices/CartSlice"
import { Link } from "react-router-dom";


const Product = ({data}) => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const {category , description , id , image , price ,rating ,title} =data; 

  const handleAdd =()=>{
      dispatch(add(data));
      toast.success("Product added successfully");
      console.log(cart)
  }

  const handleRemove =()=>{
      dispatch(remove(data.id));
      toast.error("Product removed successfully");
  }
  return (
    <div className="flex flex-wrap border-2 border-gray-500 justify-center items-center w-full">
      <div className="w-1/4 p-4">
        <div className="border-2 border-gray-500 p-4">
          
          <p className="mt-2 text-center font-bold">{title}</p>
          <p className="text-sm text-center">{description}</p>
          <img src={image} className="w-full" alt="No image" />
          <p className="text-sm text-center">Price: ${price}</p>
          {
            cart.some((i)=>i.id== data.id) ? (
              <button onClick={handleRemove} >
                Remove Cart
              </button>
            ): (<button onClick={handleAdd} >
              Add to Cart
            </button>) 
          }
        </div>
      </div>
    </div>
  )
};

export default Product;
