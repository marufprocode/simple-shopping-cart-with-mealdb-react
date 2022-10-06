import { createBrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";
import FoundFood from "../components/FoundFood";
import Home from "../components/Home";
import Main from "../Main";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <Main/>, 
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path:'/products/:food',
                loader: async ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.food}`),
                element: <FoundFood/>
            }
        ]
    },
/*     {
        path: '/cart',
        element: <Cart/>
    }, */
    {
        path: '*', 
        element: <div className="text-3xl font-bold text-center mt-12 text-red-600">Page Not Found</div> 
    }
])

export default router;