import React from 'react';
import ApiContext from '../../ApiContext';
import './newsList.css';


import Results from '../results/results';

class NewsList extends React.Component{
    
    static contextType = ApiContext;
    render() {
        const { newsList } = this.context;

        
        
        
        return (
            <div className='newsList'>
                <h2>News</h2>
                
                    
                    {newsList.map((article) => {
                        return(
                        <ul className='NewsList' key={article.url}>
                            <li className='NewsResults'>
                                
                                <Results
                                    
                                    title={article.title}
                                    publishedAt={article.publishedAt}
                                    content={article.description}
                                    url={article.url}
                                    urlToImg={article.urlToImage}/>
                            </li>
                        </ul>
                    )})}
                
            </div>
        )
    }
}

export default NewsList;