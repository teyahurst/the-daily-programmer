import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import menu from '../infograms/images/images/424912-200.png'




class NavBar extends React.Component {
    render(){
        return (
            <div className='dropdown'>
                <button className='dropbtn'><img src={menu} alt='three-line-menu'/></button>
                    <div className='dropdown-content'>
                        <Link className='News' to={'/news'}>News</Link>
                        <br/>
                        <Link className='Cheatsheets' to={'/cheatsheets'}>Cheat Sheets</Link>
                        <br/>
                        <Link className='Public-Api' to={'/public-apis'}>Public API's</Link>
                    </div>
            </div>

        )
    }
}

export default NavBar;