import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import Root from "../Root/Root";

export const goro = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            }
        ]
    }
])