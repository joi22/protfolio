import React from 'react'
import { Outlet } from 'react-router-dom'
import Navebar from './UI/we_Site/componente/Navebar'
import Footer from './UI/we_Site/componente/Footer'

const AppLayout = () => {
    return (
        <div className="bg-glow min-h-screen flex flex-col">
            <Navebar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default AppLayout