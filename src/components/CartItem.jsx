import { toast } from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice"

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div>
      <div className="flex border-b-2 w-[400px]">
      <div className="h-[180px]">
        <img src={item.image} className="h-[100px] w-[100px]"/>
      </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div
            onClick={removeFromCart}>
              <FcDeleteDatabase />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CartItem;
