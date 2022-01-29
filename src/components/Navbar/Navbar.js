import React, {useState, useEffect} from "react"
import { HashLink as Link} from 'react-router-hash-link';
import './Navbar.css';



import {Button} from '../Button/Button'
function Navbar(){
    const [click,setClick]=useState(false);

    const [button,setButton]=useState(true);

    

    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }
        else{
            setButton(true);
        }
        };




    useEffect(()=>{
        showButton();
    }, []);

    window.addEventListener('resize',showButton);

    

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link smooth to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src="https://www.nogozo.com/static/mainapp/img/logo.png" width="100"/>
                    </Link>
                    
                    
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click?"fas fa-times": "fas fa-bars"}/>
                        </div>

                   
                    <ul className={click? 'nav-menu active': 'nav-menu'}>
                        <li className='nav-item'>
                            <Link smooth to='#' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link smooth to='#services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link smooth to='#features' className='nav-links' onClick={closeMobileMenu}>
                                Features
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link smooth to='#contactus' className='nav-links' onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>
                        

                    </ul>
                   
                    
                   
                </div>
            </nav>
        </>
    )
}


export default Navbar;