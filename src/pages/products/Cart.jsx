// src/pages/Cart.js
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem";
import Total from "../../components/Total";

const Cart = () => {
  const cart = useSelector((state) => state.items);
  console.log(cart, "cartpage");

  return (
    <div className="mx-52 sm:m-0">
      <h3 className="text-center text-5xl m-10 italic sm:text-center sm:text-4xl sm:m-0 sm:mt-5">
        Shopping cart
      </h3>
      <div className="grid grid-cols-5 text-center py-5 text-2xl font-semibold border-b-[1px] border-gray-200 sm:text-xl">
        <h4 className="text-gray-50">image</h4>
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
