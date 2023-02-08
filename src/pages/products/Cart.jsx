// src/pages/Cart.js
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.items);
  console.log(cart, "cartpage");

  return (
    <div>
      <h3 className="text-center text-5xl m-10 italic">Shopping cart</h3>
      <div className="grid grid-cols-3 text-center my-6 text-2xl text-red-600">
        <h4>Prodct</h4>
        <h4>Price</h4>
        <h4>Quantity</h4>
      </div>
      {cart.map((item) => (
        <CartItem key={item.id} details={item} />
      ))}
    </div>
  );
};

export default Cart;
