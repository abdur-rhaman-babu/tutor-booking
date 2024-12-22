import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home";
import FindTutor from "../pages/FindTutor/FindTutor";
import AddTutor from "../pages/AddTutor/AddTutor";
import MyTutorials from "../pages/MyTutorials/MyTutorials";
import MyBookedTutorials from "../pages/MyBookedTutorials/MyBookedTutorials";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
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
                element:<AddTutor/>
            },
            {
                path:'/myTutorials',
                element:<MyTutorials/>
            },
            {
                path:'/myBookedTutorials',
                element:<MyBookedTutorials/>
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