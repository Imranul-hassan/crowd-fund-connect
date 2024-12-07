import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const {user, handleLogOut} = useContext(AuthContext)
   
    return (
      <div className="navbar w-11/12 mx-auto text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#1D3557] rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/all-campaign">All Campaign</NavLink>
              <NavLink to="/add-new-campaign">Add New Campaign</NavLink>
              <NavLink to={`/my-campaign/${user?.email}`} >My Campaign</NavLink>
              <NavLink to={`/my-donation/${user?.email}`}>My Donations</NavLink>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl pl-0">CROWDFUNDING</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6 font-semibold text-base">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/all-campaign">All Campaign</NavLink>
              <NavLink to="/add-new-campaign">Add New Campaign</NavLink>
              <NavLink to={`/my-campaign/${user?.email}`} >My Campaign</NavLink>
              <NavLink to={`/my-donation/${user?.email}`}>My Donations</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
         {
            user?.email ? 
            (<div className="flex gap-2">
              <img className="w-9 rounded-full" src={user.photoURL}></img>
              <button className="font-semibold py-2 px-3 bg-[#FFB800] rounded-md" onClick={handleLogOut}>Logout</button>
            </div>) :
            (<NavLink to="/login">
              <a className="py-2 px-3 bg-[#a6c1ee] rounded-md font-semibold">Login</a>
            </NavLink>)
         }
        </div>
      </div>
    );
};

export default Navbar;