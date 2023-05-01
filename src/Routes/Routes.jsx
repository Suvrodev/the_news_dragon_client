import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewLayout from "../layouts/NewsLayout/NewsLayout";
import News from "../Pages/News/News/News";
import NewsLayout from "../layouts/NewsLayout/NewsLayout";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import Login_ from "../Pages/Login/Login/Login_";
import Register from "../Pages/Login/Register/Register";



  const router=createBrowserRouter([
    {
        path: '/',
        element:<LoginLayout></LoginLayout>,
        children: [
            {
                
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: '/login',
                element: <Login_></Login_>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]

    },
    {
        path: 'category',
        element: <Main></Main>,
        children:[
            {
                path: ':id',
                element: <Category></Category>
            },
        ]
    },
    {
        path: '/news/',
        element: <NewsLayout></NewsLayout>,
        children:[
            {
                path: ':id',
                element: <News></News>
            }
        ]
    },
   
  ])

  export default router;