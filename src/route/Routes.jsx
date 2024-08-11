import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Category from "../pages/Category";
import AllCategory from "../pages/AllCategory";
import Form from "../components/landing/From";
import {loader} from "../utilities/loader";
import Profile from "../pages/Profile";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoutes from "./Privateroute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: loader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:name",
        element: <Product />,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        ),
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/allCategory",
        element: <AllCategory />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoutes>
            <CheckOut />
          </PrivateRoutes>
        ),
      },
      {
        path: "/landing/:name",
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);

export default Routes;
