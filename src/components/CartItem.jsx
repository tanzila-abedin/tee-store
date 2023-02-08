// import { cartActions } from "../store/cartSlice";
// import { useDispatch } from "react-redux";
const CartItem = ({ details }) => {
  const { product, quantity } = details;

  console.log(product);
  return (
    <>
      <div className="grid grid-cols-3 text-center my-2">
        <p>{product.title}</p>
        <p>R {product.price}</p>
        <p>{quantity}</p>
      </div>
    </>
  );
};

export default CartItem;
