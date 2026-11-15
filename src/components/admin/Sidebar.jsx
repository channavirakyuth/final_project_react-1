import React from "react";
import { NavLink } from "react-router";



  function Sidebar({isActive}){

  
  return (
    <div
      className={`${isActive ? "w-[270px]" : "w-0"} min-h-screen bg-slate-800 overflow-hidden transition-all duration-300`}>
      <div
        className='h-13 bg-slate-950 text-white font-bold text-2xl
      flex justify-center items-center'>
        Store
      </div>
      <div className='flex flex-col'>
        <NavLink
          to={`/admin`}
          className={({ isActive }) =>
            isActive
              ? "bg-slate-400/50 py-3 px-5 text-white"
              : "py-3 px-5 text-white"
          } end>
          Dashboard
        </NavLink>
        <NavLink
          to={`/admin/order`}
          className={({ isActive }) =>
            isActive
              ? "bg-slate-400/50 py-3 px-5 text-white"
              : "py-3 px-5 text-white"
          } end>
          Order
        </NavLink>
        <NavLink
          to={`/admin/products`}
          className={({ isActive }) =>
            isActive
              ? "bg-slate-400/50 py-3 px-5 text-white"
              : "py-3 px-5 text-white"
          } end>
          Products
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
