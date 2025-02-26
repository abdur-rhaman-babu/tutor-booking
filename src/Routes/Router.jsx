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
import UpdateTutor from "../pages/UpdateTutor/UpdateTutor";
import TutorDetails from "../pages/TutorDetails/TutorDetails";
import FindTutorCategory from "../pages/FindTutorCategory/FindTutorCategory";
import About from "../pages/About/About";

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
                path:'/find-tutor',
                element:<FindTutor/>
            },
            {
                path:'/find-tutor/:category',
                element:<FindTutorCategory/>
            },
            {
                path:'/about',
                element:<About/>
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
                path:'/details/:id',
                element:<PrivateRoute><TutorDetails/></PrivateRoute>
            },
            {
                path:'/update/:id',
                element:<UpdateTutor/>
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