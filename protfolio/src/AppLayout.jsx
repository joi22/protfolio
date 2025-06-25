import React from 'react'
import { Outlet } from 'react-router-dom'
import Navebar from './UI/we_Site/componente/Navebar'

const AppLayout = () => {
    return (
        <>
           <Navebar/>
                <Outlet />

        </>)
}

export default AppLayout