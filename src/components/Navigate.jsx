import { FaHome, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navigate = () => {
  const cart = useSelector((state) => state.items);
  console.log(cart);

  const getTotalItems = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <nav className="flex justify-between p-4 px-16 fixed w-full h-16 bg-teal-400 shadow-2xl z-10">
      <div>
        <p className="text-white italic font-medium text-3xl"> Tee-Store</p>
      </div>
      <div className="flex justify-between">
        <a href="/cart" className="mx-6">
          <FaShoppingCart color="white" className="h-10 w-10" />
          <span className="absolute font-extrabold bg-amber-600">
            {getTotalItems() || 0}
          </span>
        </a>
        <a href="/">
          <FaHome color="white" className="h-10 w-10" />
        </a>
      </div>
    </nav>
  );
};

export default Navigate;
