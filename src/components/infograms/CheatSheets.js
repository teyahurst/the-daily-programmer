import React from 'react';
import './CheatSheets.css';
import ModalImage from 'react-modal-image';

import ImageList from '../ImageList/imageList';


class CheatSheets extends React.Component{

   constructor(props){
       super(props)

       this.state = {
           showModal: false,

       }
   }

   handleOpenModal = () => {
        this.setState({
            showModal: true,
        })

   }

   handleCloseModal = () => {
       this.setState({
           showModal: false
       })
   }

    
    render(){
        
        
        return(
            <div className='container'>
                <ul className='Thumbnail-img-list'>
                {ImageList.map((img, i) => {
                    return(
                        
                                <li className='Modal-img' key={i}> 
                                    <ModalImage 
                                        small={img}
                                        large={img}
                                        alt='CheatSheets'
                                        className='cheatsheets-thumbnail'/>
                                </li>
                            
                        
                         
                        
                    )
                })}
                </ul>

                
            </div>
        )
    }
}

export default CheatSheets;