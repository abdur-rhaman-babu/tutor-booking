import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home";
import FindTutor from "../pages/FindTutor/FindTutor";
import AddTutor from "../pages/AddTutor/AddTutor";
import MyTutorials from "../pages/MyTutorials/MyTutorials";
import MyBookedTutorials from "../pages/MyBookedTutorials/MyBookedTutorials";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../Context/PrivateRoute/PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        errorElement:<ErrorPage/>,
        children: [
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/findTutor',
                element:<FindTutor/>
            },
            {
                path:'/addTutorials',
                element:<PrivateRoute><AddTutor/></PrivateRoute>
            },
            {
                path:'/myTutorials',
                element:<PrivateRoute><MyTutorials/></PrivateRoute>
            },
            {
                path:'/myBookedTutorials',
                element:<PrivateRoute><MyBookedTutorials/></PrivateRoute>
            },
            
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }

        ]
    }
])