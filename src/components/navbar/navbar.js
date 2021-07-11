import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';



class NavBar extends React.Component {
    render(){
        return (
            <div className='NavBar'>
                <Link className='News' to={'/news'}><button className='Nav-button'>News</button></Link>
                <Link className='Cheatsheets' to={'/cheatsheets'}><button className='Nav-button'>Cheat Sheets</button></Link>
                <Link className='Public-Api' to={'/public-apis'}><button className='Nav-button'>Public API's</button></Link>
            </div>

        )
    }
}

export default NavBar;