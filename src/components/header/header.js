import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/navbar';
import './header.css';

function Header(){
    return (
        <div className='header'>
            <header className='App-Header'>
                <h1>
                    <Link to={'/'} className='Header-Link'>
                        The Daily Programmer
                    </Link>
                    <NavBar/>
                </h1>
                
                
            </header>
        </div>
    )
}

export default Header;