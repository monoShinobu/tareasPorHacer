import React from 'react'
import { NavLink, Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Tareas por hacer</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <NavLink to="/tareas" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>TareasPendientes</NavLink>
                        <NavLink to="/gayDetector" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")} >GayDetector</NavLink>
                    </div>
                </div>
            </div>
        </nav>

    )
}
