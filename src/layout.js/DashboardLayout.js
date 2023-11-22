import React, { useContext } from "react";
import Header from "../shared/Header";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useAdmin from "../components/hooks/useAdmin";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  

  const handleNavLinkClick = () => {
    const checkbox = document.getElementById("my-drawer-2");
    if (checkbox.checked) {
      checkbox.checked = false;
    }
  };
  return (
    <div>
      <Header></Header>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here */}
          <Outlet></Outlet>
          {/* <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label> */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li onClick={handleNavLinkClick}>
              <Link to="/dashboard">My appointment </Link>
            </li>
            {
              <>
                <li onClick={handleNavLinkClick}>
                  <Link to="/dashboard/users">All Users</Link>
                </li>
              </>
            }

            <li>
              <Link to="/dashboard/doctor">Add doctor</Link>
            </li>
            <li htmlFor="my-drawer-2" onClick={handleNavLinkClick}>
              <Link to="/dashboard/manageDoctors">Manage Doctors</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
