import React from 'react';
import imageList from '../ImageList/imageList';
import ModalImage from 'react-modal-image';
import './topCheatSheets.css';

class TopCheatSheets extends React.Component{
    render(){
        const topCheatSheets = imageList.slice(0, 5)
        

        return(
            <div className='topCheatSheets-container'>
                <ul className='topCheatSheets-List' >
                {topCheatSheets.map((img, i) => {
                    return(
                            <li className='topCheatSheets' key={i}>
                                <ModalImage
                                    small={img}
                                    large={img}
                                    alt='CheatSheet'/>
                            </li>
                    )
                })}
                </ul>
            </div>
        )
    }
}



export default TopCheatSheets;