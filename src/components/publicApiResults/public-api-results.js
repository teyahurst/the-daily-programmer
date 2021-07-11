import React from 'react';
import './public-api-results.css';

class PublicApiResults extends React.Component{

    render(){
        const { name, authorization, description, cors, url } = this.props;
        
        return (
            <div className='api-results'>
                <a href={url} target="_blank" rel='noreferrer'>
                    <button className='api-results-link'>
                        <ul>
                            <li className='name'>Name: {name}</li>
                            <li className='Authorization'>Authorization: {authorization}</li>
                            <li className='description'>Description: {description}</li>
                            <li className='cors'>Cors support: {cors}</li>
                            
                        </ul>
                    </button>
                </a>
            </div>
        )
    }
}

export default PublicApiResults;