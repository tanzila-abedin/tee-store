import React from "react";
import { cartActions } from "../store/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const DetailCard = ({ details }) => {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch(
      cartActions.addProduct({
        product: details,
        quantity: 1,
      })
    );
  };

  return (
    <>
      <div className="grid grid-cols-2 bg-gray-200 m-24">
        <div className=" bg-white flex justify-center m-5">
          <img src={details.image} className="m-0 w-2/3" />
        </div>
        <div className="m-5">
          <h2 className="text-3xl font-extrabold">{details.title}</h2>
          <p className="my-5 text-5xl font-bold text-teal-600">
            {" "}
            R {details.price}
          </p>
          <div className="ml-0 mr-24 my-14 border-t-2 border-dashed border-teal-600"></div>
          <button
            className="bg-teal-600 text-white hover:bg-white hover:text-black p-3 rounded-lg "
            onClick={onAddToCart}
          >
            Add to cart
          </button>
          <div className="ml-0 mr-24 my-14 border-t-2 border-dashed border-teal-600"></div>
          <h4 className=" my-5 text-2xl font-medium italic">Details</h4>
          <p>{details.description}</p>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
