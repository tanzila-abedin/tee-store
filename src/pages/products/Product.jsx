import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getProduct } from "../../api/products";
import DetailCard from "../../components/DetailCard";
import Loading from "../../components/Loading";

const Product = () => {
  const { id } = useParams();
  const { isLoading, data, error } = useQuery(["product", id], () =>
    getProduct(id)
  );

  if (error) {
    return <p> error found</p>;
  }

  return <div>{isLoading ? <Loading /> : <DetailCard details={data} />}</div>;
};

export default Product;
