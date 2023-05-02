import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Components/Home/Home";
import Recipes from "../Components/Recipes/Recipes";



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
            element: <Recipes></Recipes>,
            loader: ({params})=> fetch(`http://localhost:5000/recipes/${params.id}`)
        }
      ]
    },
  ]);

  export default router;