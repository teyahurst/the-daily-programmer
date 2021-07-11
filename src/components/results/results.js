import React from 'react';
import './results.css';



class Results extends React.Component{
    
    render(){
        const { title, publishedAt, url } = this.props;
        
       
        
        return (
            <div className='Results'>
                <a className='Results-Link' href={url} target="_blank" rel='noreferrer'><button className='results-button'>
                <ul className='item'>
                    <li className='title'>{title}</li>
                    
                    <li className='date-published'>{publishedAt}</li>
                    
                </ul>
                
                </button>
                </a>
                
            </div>
        )
    }
}

export default Results;