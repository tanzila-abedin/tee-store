// src/pages/Cart.js
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem";
import Total from "../../components/Total";

const Cart = () => {
  const cart = useSelector((state) => state.items);
  console.log(cart, "cartpage");

  return (
    <div className="mx-52">
      <h3 className="text-center text-5xl m-10 italic">Shopping cart</h3>
      <div className="grid grid-cols-4 text-center py-5 text-2xl font-semibold border-b-[1px] border-gray-200">
        <h4>Product</h4>
        <h4>Price</h4>
        <h4>Quantity</h4>
        <h4 className="text-gray-50">Remove</h4>
      </div>
      {cart.map((item) => (
        <CartItem key={item.product.id} details={item} />
      ))}
      <div>
        <Total />
      </div>
    </div>
  );
};

export default Cart;
