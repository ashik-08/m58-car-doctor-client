import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";

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
            element: <CheckoutPage></CheckoutPage>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
        },
    ]
  },
]);

export default router;