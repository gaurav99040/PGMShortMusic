import React from 'react'
import {BrowserRouter as Link}  from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <header className="header">
        <nav className="navbar">
           <div className="nav-logo"><Link to="/" >PGM Short Music</Link></div> 
            <ul className="nav-menu">
                <li className="nav-item">
                    <div className="nav-link"><Link to="/" >List</Link></div>
                </li>
            </ul>
            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
</header>
        </div>
    )
}

export default Navbar
