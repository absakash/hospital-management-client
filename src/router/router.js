import DisplayError from "../components/displayError/DisplayError";
import Appoinment from "../components/path/appoinment/Appoinment";
import AddDoctor from "../components/path/dashboard/AddDoctor";
import Alluser from "../components/path/dashboard/Alluser";
import Dashboard from "../components/path/dashboard/Dashboard";
import ManageDoctors from "../components/path/dashboard/ManageDoctors";
import Myappointment from "../components/path/dashboard/Myappointment";
import Payment from "../components/path/dashboard/Payment";
import Login from "../components/path/logReg/Login";
import Register from "../components/path/logReg/Register";
import Medicines from "../components/path/medicine/Medicines";
import DashboardLayout from "../layout.js/DashboardLayout";
import AdminRouter from "./AdminRouter";
import PrivateRouter from "./PrivateRouter";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout.js/Main");
const { default: Home } = require("../home/Home");

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<DisplayError></DisplayError>,

        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>

            },
            {
                path:'/appointment',
                element:<Appoinment></Appoinment>

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
                path:'/medicines',
                element:<Medicines></Medicines>

            },
            {
                path:'*',
                element:<div>not found yetoo</div>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path:'/dashboard',
                element:<PrivateRouter><Myappointment></Myappointment></PrivateRouter>
            },
            {
                path:'/dashboard/users',
                element:<Alluser></Alluser>
            },
            {
                path:'/dashboard/doctor',
                element:<AddDoctor></AddDoctor>
            },
            {
                path:'/dashboard/manageDoctors',
                element:<ManageDoctors></ManageDoctors>
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader: ({params})=>fetch(`http://localhost:4000/booking/${params.id}`) 
            },
        ]
    }
])

export default router