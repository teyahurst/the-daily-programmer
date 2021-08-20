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
                        <ul className='modal-list' key={i}>
                            <li className='topCheatSheets'>
                                <ModalImage
                                    small={img}
                                    large={img}
                                    alt='CheatSheet'
                                    className='thumbnail'/>
                            </li>
                        </ul>
                    )
                })}
                </ul>
            </div>
        )
    }
}



export default TopCheatSheets;