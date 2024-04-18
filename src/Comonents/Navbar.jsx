import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provaider/AuthProvaider";


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const handelSingout = () => {
    logOut()
      .then()
      .catch()

  }
  const navLinks = <>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/UpdateProfile"}>Update Profile</NavLink></li>
    <li><NavLink to={"/userprofile"}>user profile</NavLink></li>
    <li><NavLink to={"/Team"}>Team</NavLink></li>
    <li><NavLink to={"/errorPage"}>Contact us</NavLink></li>
  </>
  return (
    <div data-aos="fade-down"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
    <div  className="navbar bg-orange-300 rounded-md" >
      <div  className="navbar-start ">
        <div  className="dropdown">
          <div  tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul  tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks }
          </ul>
        </div>
        <a className="btn btn-ghost font-bold text-xl"> Dream Home</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-3">

        {
          user?.email ? <div className="flex gap-2 items-center"><div className="w-10 rounded-full lg:tooltip lg:tooltip-left"data-tip={user?.displayName} >
            <img className="rounded-full "  alt="profile" src={user?.photoURL} />
          </div> <button onClick={handelSingout} className="btn btn-warning">Sign out</button></div> : <Link to={"/Login"}> <button className="btn btn-outline">Login</button></Link>
        }

      </div>
    </div>
    </div>

  );
};

export default Navbar;