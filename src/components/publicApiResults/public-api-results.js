import React from 'react';
import './public-api-results.css';

class PublicApiResults extends React.Component{

    render(){
        const { name,  description, cors, url } = this.props;
        
        return (
            <div className='api-results'>
                <a href={url} target="_blank" rel='noreferrer'>
                    <button className='api-results-link'>
                        <ul>
                            <li>
                                <h5>Name: {name}</h5>
                                <p>Description: {description}</p>
                                <p>Cors Support: {cors}</p>
                            </li>
                            
                            
                        </ul>
                    </button>
                </a>
            </div>
        )
    }
}

export default PublicApiResults;