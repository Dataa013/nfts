import React from 'react'
import {Link} from 'react-router-dom'
import panda from '../../images/Panda.svg'
import './Navbar.css';


function Navbar() {
return (
<nav className="navbar">
    <div className='container'>
        <div className="nav-cont">
            <Link to="/" className='nav-logo'>
            <img src={panda} />
            <h3 className="panda-title">Panda NFT</h3>
            </Link>
            <ul className='nav-list'>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>

                <li>
                    <Link to='/'>
                        Discover
                    </Link>
                </li>

                <li>
                    <Link to='/'>
                        Docs
                    </Link>
                </li>

                <li>
                    <Link to='/'>
                        Blog
                    </Link>
                </li>

                <li>
                    <Link to='/'>
                        About Us
                    </Link>
                </li>

                <li>
                    <Link to='/'>
                        Contact Us
                    </Link>
                </li>
            </ul>
            <Link to='/'>
                <button className='nav-btn'>
                     Connect Wallet
                </button>
            </Link>
        </div>
    </div>
</nav>

)
}

export default Navbar