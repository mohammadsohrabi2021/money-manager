import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import AddMoney from "../pages/addMoney";


export const Route = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path:'/addMoney',
        element: <AddMoney/>
    },
    {
        path:"/updatemony/:monyId",
        element: <AddMoney/>
    }
])


