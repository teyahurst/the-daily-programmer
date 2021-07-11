import React from 'react';
import PublicApiResults from '../publicApiResults/public-api-results';

class PublicApiResultsList extends React.Component {
    render(){
    const publicApis = this.props.publicApis;
    

    if(publicApis === null){
        return(
            <p>No API results found</p>
        )
    } else {

        return(
            <div className='Results-List'>
                {publicApis.map((entries) => {
                    return(
                    <ul className='api-results-list' key={entries.Link}>
                        <li className='api-results-list'>
                            <PublicApiResults 
                                    name={entries.API}
                                    authorization={entries.Auth}
                                    description={entries.Description}
                                    cors={entries.Cors}
                                    url={entries.Link}/>
                        </li>
                    </ul>
                    


                )})}

            </div>
            )
        }
    }
} 

export default PublicApiResultsList;