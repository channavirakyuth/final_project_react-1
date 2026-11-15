import React from 'react'
import { Navigate } from 'react-router'

const AuthRoute = ({children}) => {

    let token = localStorage.getItem("token")

    if(token){
        return <Navigate to={`/`}/>
    }else{
        return children
    }
  return (
    <div>
      AuthRoute
    </div>
  )
}

export default AuthRoute
