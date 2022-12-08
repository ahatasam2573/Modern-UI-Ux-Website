import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.css';

//Using multiple times
const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#modernSite">Web3.0</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Information</a></p>
        <p><a href="#blog">Library</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className='bg__gradient' id='modern__navbar'>
            <div className="modern__navbar-links">
                <div className="modern__navbar-links_logo">
                    <h1>3.0</h1>
                </div>
                <div className="modern__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="modern__navbar-sign">
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
            </div>
            <div className="modern__navbar-menu">
                {
                    toggleMenu ?
                        <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                        :
                        <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {
                    toggleMenu && (
                        <div className='modern__navbar-menu_container scale-up-center'>
                            <div className='modern__navbar-menu_container-links'>
                                <Menu />
                                <div className="modern__navbar-menu_container-links-sign">
                                    <p>Sign In</p>
                                    <button type='button'>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;