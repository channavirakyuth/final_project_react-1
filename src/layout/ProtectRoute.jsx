import React from 'react'
import { Navigate } from 'react-router'

const ProtectRoute = ({children}) => {

    let token = localStorage.getItem("token")
    if(token){
        return children
    }else{
        return <Navigate to={`/login`}/>
    }
  return (
    <div>
      
    </div>
  )
}

export default ProtectRoute
