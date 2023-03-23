import React from 'react'
import { useLocation, useNavigate } from "react-router-dom"


function Header() {
    const location = useLocation()
    const navigate = useNavigate()

    function pathMatchRoute(route) {
        if (route === location.pathname) {
            return true;
        }
        return false;
    }

    return (
        <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
            <header className='flex justify-between items-center px-3 max-w-6x1 mx-auto'>
                <div>
                    <img src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg' className="h-5 cursor-pointer" alt='logo' onClick={() => navigate("/")}></img>
                </div>
                <div>
                    <ul className='flex space-x-10'>
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-3
                            ${pathMatchRoute("/") && "text-black border-b-red-500"}`} onClick={() => navigate("/")}>
                            Home
                        </li>
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-3
                            ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`} onClick={() => navigate("/offers")}>Offers</li>
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-3
                            ${pathMatchRoute("/sign-in") && "text-black border-b-red-500"}`} onClick={() => navigate("/sign-in")}>Sign in</li>

                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header
