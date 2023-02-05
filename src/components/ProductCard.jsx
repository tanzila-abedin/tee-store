import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <a>
      <div className="relative overflow-hidden  bg-no-repeat bg-cover w-full rounded-xl flex justify-center items-center p-4 px-8 bg-white">
        <img src={product.image} className="h-96 w-90" />
        <a href={`/product/${product.id}`}>
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full m- overflow-hidden bg-fixed opacity-0 hover:opacity-50 transition duration-300 ease-in-out bg-teal-100">
            <FaShoppingCart
              color="teal"
              className="h-16 w-16 mx-60 my-44 opacity-100"
            />
          </div>
        </a>
      </div>
      <h3 className="mt-4 text-lg font-semibold italic text-gray-700">
        {product.title}
      </h3>
      <h3 className="mt-4 text-3xl font-bold text-teal-500">
        R {product.price}
      </h3>
    </a>
  );
};

export default ProductCard;
