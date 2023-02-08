import { useSelector } from "react-redux";

const Total = () => {
  const cart = useSelector((state) => state.items);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.product.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <>
      <div className=" flex justify-end pt-10 border-t-[2px] border-gray-200">
        <p className="mx-5 text-3xl">
          Total ({getTotal().totalQuantity} items) :{" "}
        </p>
        <p className="ml-5 text-3xl">
          <strong>R{getTotal().totalPrice}</strong>
        </p>
      </div>
    </>
  );
};

export default Total;
