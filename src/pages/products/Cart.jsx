// src/pages/Cart.js
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.items);
  console.log(cart, "cartpage");

  return (
    <div>
      <h3>Shopping cart</h3>
    </div>
  );
};

export default Cart;
