import { cartActions } from "../store/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ details }) => {
  const { product, quantity } = details;
  const dispatch = useDispatch();

  const onIncrementQuantity = () => {
    dispatch(cartActions.increment(product.id));
  };

  const onDecrementQuantity = () => {
    dispatch(cartActions.decrement(product.id));
  };

  console.log(product);
  return (
    <>
      <div className="grid grid-cols-3 text-center my-2">
        <p>{product.title}</p>
        <p>R {product.price}</p>
        <div className="">
          <button onClick={onIncrementQuantity}> ADD</button>
          <p>{quantity}</p>
          <button onClick={onDecrementQuantity}>SUBTRACT</button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
