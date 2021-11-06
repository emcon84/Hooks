import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to='/'className="navbar-brand">useContext</Link>             
                <ul className="navbar-nav">
                    <li><NavLink exact="true" activeclassname="active" to='/' className="nav-link">Home</NavLink></li>
                    <li><NavLink exact="true" activeclassname="active" to='/about' className="nav-link">About</NavLink></li>
                    <li><NavLink exact="true" activeclassname="active" to='/Login' className="nav-link">Login</NavLink></li>
                </ul>                
            </div>
            </nav>
    )
}
