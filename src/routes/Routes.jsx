import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Components/Home/Home";
import Recipes from "../Components/Recipes/Recipes";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Blog from "../Components/Blog/Blog";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path: '/recipes/:id',
            element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
            loader: ({params})=> fetch(`https://italian-taste-server1-ninjax11000.vercel.app/recipes/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
        ,
        {
          path:'*',
          element:<ErrorPage></ErrorPage>

        }
      ]
    },
  ]);

  export default router;