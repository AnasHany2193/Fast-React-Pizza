import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home.jsx";
import Error from "./ui/Error.jsx";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart.jsx";
import Order from "./features/order/Order.jsx";
import CreateOrder from "./features/order/CreateOrder.jsx";
import AppLayout from "./ui/AppLayout.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/cart", element: <Cart /> },
      { path: "/order/:orderId", element: <Order /> },
      { path: "/order/new", element: <CreateOrder /> },
      { path: "*", element: <Error /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
