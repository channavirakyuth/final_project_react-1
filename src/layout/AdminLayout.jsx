import React, { useState } from "react";
import { Outlet } from "react-router";
import TopMenu from "../components/admin/TopMenu";
import Sidebar from "../components/admin/Sidebar";

const AdminLayout = () => {

  const [toggle, setToggle] = useState(true)
  function handleToggle(){
    setToggle(!toggle)
  }
  return (
    <div className='flex items-start'>
      <Sidebar isActive={toggle}/>

      <div className='grow'>
        <TopMenu sidebar={handleToggle} />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
