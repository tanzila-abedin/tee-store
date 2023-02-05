import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AllProducts from "./pages/products/AllProducts";
import Product from "./pages/products/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllProducts />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
