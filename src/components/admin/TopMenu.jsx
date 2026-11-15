import { Menu } from 'lucide-react'
import React from 'react'

function TopMenu({sidebar}) {
  return (
    <div className='bg-white-800 shadow w-full h-13 flex justify-between items-center px-3 gap-3'>
      <div>
        <button onClick={sidebar} className='btn-navbar'><Menu/></button>
      </div>
      <div>
        <button className='btn-navbar'>Admin</button>
      </div>
    </div>
  )
}

export default TopMenu
