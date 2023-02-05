import { api } from "./baseAPI";

export const getProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};

export const getProduct = async (id) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};
