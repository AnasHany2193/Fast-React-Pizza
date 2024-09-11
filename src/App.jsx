import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home.jsx";
import Error from "./ui/Error.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import Cart from "./features/cart/Cart.jsx";
import CreateOrder from "./features/order/CreateOrder.jsx";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Order, { loader as orderLoader } from "./features/order/Order.jsx";
import { action as CreateOrderAction } from "./utils/orderActions.js";
import { action as UpdateOrderAction } from "./features/order/UpdateOrder.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: CreateOrderAction,
        errorElement: <Error />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        element: <Order />,
        loader: orderLoader,
        path: "/order/:orderId",
        errorElement: <Error />,
        action: UpdateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
