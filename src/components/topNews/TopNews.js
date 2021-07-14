import React from 'react';
import ApiContext from '../../ApiContext';
import './topNews.css';

import Results from '../results/results';

class TopNews extends React.Component {
    static contextType = ApiContext;
    render() {
        const { newsList } = this.context;

        
        const topNews = newsList.slice(0, 5)

        

        return(
            <div className='TopNewsResults'>
                {topNews.map((article) => {
                        return(
                        <ul className='Results-list' key={article.url}>
                            <li className='results-list' >
                                
                                <Results
                                    
                                    title={article.title}
                                    author={article.author}
                                    publishedAt={article.publishedAt}
                                    url={article.url}
                                    content={article.description}/>
                            </li>
                        </ul>
                        
                    )})}
            </div>
        )
    }
}

export default TopNews;
