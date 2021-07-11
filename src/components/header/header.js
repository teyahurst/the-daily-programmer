import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/navbar';
import './header.css';

function Header(){
    return (
        <div className='header'>
            <header className='App-Header'>
                <h1 className='Header-Link'>
                    <Link to={'/'}>
                        The Daily Programmer
                    </Link>
                    
                </h1>

                <NavBar/>
            </header>
        </div>
    )
}

export default Header;