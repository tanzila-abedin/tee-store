import { cartActions } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = ({ details }) => {
  const { product, quantity } = details;
  const dispatch = useDispatch();

  const onIncrementQuantity = () => {
    dispatch(cartActions.increment(product.id));
  };

  const onDecrementQuantity = () => {
    dispatch(cartActions.decrement(product.id));
  };

  const onRemoveQuantity = () => {
    dispatch(cartActions.removeProduct(product.id));
  };

  console.log(product);
  return (
    <>
      <div className="grid grid-cols-5 text-center py-10 sm:place-items-center">
        <img
          src={product.image}
          className="h-12 w-12 items-center sm:items-center"
        />
        <p className=" text-teal-400 font-medium text-lg sm:text-sm sm:font-normal">
          {product.title}
        </p>
        <p className="text-lg">R {product.price}</p>
        <div className="grid grid-cols-3 gap-0 m-0 sm:grid-cols-1">
          <button
            onClick={onDecrementQuantity}
            className="bg-gray-300 rounded-xl text-4xl text-white"
          >
            -
          </button>
          <p className="text-lg sm:m-4">{quantity}</p>
          <button
            onClick={onIncrementQuantity}
            className=" bg-teal-400  rounded-xl text-4xl text-white"
          >
            {" "}
            +
          </button>
        </div>
        <button onClick={onRemoveQuantity} className="text-center">
          <RiDeleteBin6Line
            color="red"
            className="h-10 w-10 ml-48 sm:m-0 sm:h-7 sm:w-7"
          />
        </button>
      </div>
    </>
  );
};

export default CartItem;
