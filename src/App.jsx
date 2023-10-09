import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store.js";
import ErrorElement from "./components/ErrorElement";
import HomeLayout from "./layouts/HomeLayout";
import {
  About,
  Cart,
  Checkout,
  ErrorPage,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";

// loaders
import { loader as checkoutLoader } from "./pages/Checkout.jsx";
import { loader as landingLoader } from "./pages/Landing.jsx";
import { loader as ordersLoader } from "./pages/Orders.jsx";
import { loader as productsLoader } from "./pages/Products.jsx";
import { loader as singleProductLoader } from "./pages/SingleProduct.jsx";

// actions
import { action as loginAction } from "./pages/Login.jsx";
import { action as registerAction } from "./pages/Register.jsx";
import { action as checkoutAction } from "./components/CheckoutForm.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader(queryClient),
      },
      { path: "/about", element: <About /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/checkout",
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store, queryClient),
      },
      {
        path: "/orders",
        element: <Orders />,
        loader: ordersLoader(store, queryClient),
      },
      {
        path: "/products",
        element: <Products />,
        loader: productsLoader(queryClient),
      },

      {
        path: "/products/:id",
        element: <SingleProduct />,
        loader: singleProductLoader(queryClient),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
    action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
    action: registerAction,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
