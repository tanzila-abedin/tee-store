import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AllProducts from "./pages/products/AllProducts";
import Product from "./pages/products/Product";
import Cart from "./pages/products/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllProducts />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
