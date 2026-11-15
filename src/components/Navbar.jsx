import { LogOut, Settings, TextAlignJustify, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  let navigate = useNavigate()

  function openSide() {
    setIsActive(true);
  }

  function closeSide() {
    setIsActive(false);
  }

  function handleLogOut(){
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <>
      {/* navbar */}
      <section className='flex justify-between sticky top-0 items-center px-4 md:px-25 py-3 bg-white shadow border-b border-gray-200'>
        {/* logo */}
        <div className='flex items-center'>
          <h3 className='hidden md:block font-bold text-2xl'>Store</h3>
          <button onClick={openSide} className=' block md:hidden'>
            <TextAlignJustify />
          </button>
        </div>
        <nav className='space-x-4 text-gray-600 md:block hidden'>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? "underline" : "")}>
            Home
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? "underline" : "")}>
            About
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) => (isActive ? "underline" : "")}>
            Contact
          </NavLink>
        </nav>
{/* icon */}
        <div className='flex items-center space-x-4'>
          <button className='btn-navbar'>
            <Settings />
          </button>
          <button onClick={handleLogOut} className='btn-navbar bg-blue-100 hover:bg-red-300'>
            <LogOut />
          </button>
        </div>
      </section>

      {/* sidebar */}
      <section
        className={`${isActive ? "left-0" : "-left-full"} transition-all duration-300 bg-slate-800 w-[320px] fixed top-0 bottom-0 p-6 block md:hidden`}>
        <div className='text-right'>
          <button
            onClick={closeSide}
            className='btn-navbar bg-slate-400 rounded-full
        cursor-pointer hover:bg-amber-700'>
            <X />
          </button>
        </div>
        <hr className='border-gray-400 m-5' />
        <nav className='flex flex-col text-gray-600 '>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? "py-2 px-4 rounded bg-slate-400/40 text-white"
                : "text-white py-2 px-4"
            }>
            Home
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive
                ? "py-2 px-4 rounded bg-slate-400/40 text-white"
                : "text-white py-2 px-4"
            }>
            About
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              isActive
                ? "py-2 px-4 rounded bg-slate-400/40 text-white"
                : "text-white py-2 px-4"
            }>
            Contact
          </NavLink>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
