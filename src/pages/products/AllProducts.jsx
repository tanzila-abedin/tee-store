import { getProducts } from "../../api/products";
import { useQuery } from "react-query";
import ProductCard from "../../components/ProductCard";
import ProductStyle from "../../components/ProductStyle";
import Loading from "../../components/Loading";

const AllProducts = () => {
  const { isLoading, data, error } = useQuery("products", getProducts);

  if (error) {
    return <p> error found</p>;
  }

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <ProductStyle>
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductStyle>
      )}
    </div>
  );
};

export default AllProducts;
