import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);


    window.addEventListener('resize', showButton);

    return (
    <>
        <nav className="navbar">
                    <div className='dummyDiv'>SIGNUP</div>
            
                    <div className="navbar-container">                    
                            <div className='menu-icon' onClick={handleClick}>
                                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                            </div>  
                            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                <li className='nav-item'>
                                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                        Home
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                        Services
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                        <img src="logos/pokeball-logo.png" alt="pokelogo" className="pokeball-logo"/>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                        Products
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/jij' className='nav-links' onClick={closeMobileMenu}>
                                        hjhj
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                        Sign Up
                                    </Link>
                                </li>
                            </ul>
                            
                    </div>
                
                    
                
                {button && <Button buttonStyle='btn--outline' className='signup-btn'>SIGN UP</Button>}
        </nav>
    </>
    );
    }

export default Navbar