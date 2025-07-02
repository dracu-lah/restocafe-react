import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../RootLayout";
import routePath from "../routePath";
const MenuPage = lazy(() => import("@/pages/menu"));
const CartPage = lazy(() => import("@/pages/cart"));

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: routePath.menu,
          element: <MenuPage />,
        },

        {
          path: routePath.cart,
          element: <CartPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
