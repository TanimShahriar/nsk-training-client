import { NavLink } from "react-router-dom";
import "./Navbar.css"




const Navbar = () => {

  const navLinks = <>

    <NavLink className="hover:text-red-500 text-[#013982] uppercase text-base lg:text-xl  flex items-center  px-3 py-1  rounded-md focus:text-white mr-2 duration-300 " to='/'>About</NavLink>
    <NavLink className="hover:text-red-500 text-[#013982] uppercase text-base lg:text-xl flex items-center px-3 py-1 text-center  rounded-md focus:text-white mr-2 duration-300 " to='/assignments'>Course </NavLink>



    <NavLink className="hover:text-red-500 text-[#013982] uppercase text-base lg:text-xl  flex items-center px-3 py-1 text-center  rounded-md focus:text-white mr-2 duration-300   " to='/createAssignment'>Success </NavLink>
    <NavLink className="hover:text-red-500 text-[#013982] uppercase text-base lg:text-xl  flex items-center px-3 py-1  rounded-md focus:text-white mr-2 duration-300 " to='/myAssignments'>Job</NavLink>
    <NavLink className="hover:text-red-500 text-[#013982] uppercase text-base lg:text-xl  flex items-center px-3 py-1  rounded-md focus:text-white mr-2 duration-300 " to='/myAssignments'>Gallery</NavLink>
    <NavLink className="hover:text-red-500 text-[#013982] uppercase text-base lg:text-xl  flex items-center px-3 py-1  rounded-md focus:text-white mr-2 duration-300 " to='/submittedAssignment'>Contact</NavLink>



  </>

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>

        <div className="flex items-center ">
          <NavLink className="" to="/"><img className="bigScreen h-24 w-32" src="https://i.ibb.co/ZMksQmR/nsk-Logo-removebg.png" alt="" />
          </NavLink>
          <h2 className="w-[250px] lg:full text-2xl -ml-0 lg:-ml-5 font-bold text-[#013982]">NSK Training Institute</h2>
        </div>


      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>


    </div>
  );
};

export default Navbar;
