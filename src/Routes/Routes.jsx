import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import CartDetailsPage from "../pages/CartDetailsPage/CartDetailsPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <HomePage></HomePage>,
        },
        {
            path: '/register',
            element: <Register></Register>,
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/checkout/:id',
            element: <PrivateRoute><CheckoutPage></CheckoutPage></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
        },
        {
            path: '/cart',
            element: <PrivateRoute><CartDetailsPage></CartDetailsPage></PrivateRoute>,
        }
    ]
  },
]);

export default router;