import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewLayout from "../layouts/NewsLayout/NewLayout";
import News from "../Pages/News/News/News";


  const router=createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            },
        ]
    },
    {
        path: '/news/',
        element: <NewLayout></NewLayout> ,
        children:[
            {
                path: ':id',
                element: <News></News>
            }
        ]
    }
  ])

  export default router;