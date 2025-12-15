import React from 'react'
import { Outlet } from 'react-router-dom'
import Navebar from './UI/we_Site/componente/Navebar'

const AppLayout = () => {
    return (
        <div className="bg-glow min-h-screen">
           <Navebar/>
           <Outlet />
        </div>
    )
}

export default AppLayout