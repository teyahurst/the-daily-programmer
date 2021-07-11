import React from 'react';
import './CheatSheets.css';
import ModalImage from 'react-modal-image';

import imageList from '../ImageList/imageList';


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
                
                {imageList.map((img, i) => {
                    return(
                        <div className='image-list' key={i}>
                            <ul className='Thumbnail-img-list'>
                                <li className='Modal-img' key={i}> 
                                    <ModalImage 
                                        small={img}
                                        large={img}
                                        alt='CheatSheets'/>
                                </li>
                            </ul>
                        </div>
                            
                        
                    )
                })}
                

                
            </div>
        )
    }
}

export default CheatSheets;