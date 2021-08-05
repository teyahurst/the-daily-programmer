import React from 'react';
import ApiContext from '../../ApiContext';
import './topNews.css';

import Results from '../results/results';

class TopNews extends React.Component {
    static contextType = ApiContext;
    render() {
        const { articles } = this.context;

        
        const topNews = articles.sort((a, b) => {
            return (b.likes) - (a.likes)
        })
        .slice(0, 5)

        
        
        

        return(
            <div className='TopNewsResults'>
                {topNews.map((article, index) => {
                        return(
                        <ul className='Results-list' key={index}>
                            <li className='results-list' >
                                
                            <Results
                                    id={article.article_id}
                                    title={article.title}
                                    url={article.article_url}
                                    urlToImg={article.urltoimage}
                                    likes = {article.likes}
                                    dislikes = {article.dislikes}
                                    content = {article.content}
                                    />
                            </li>
                        </ul>
                        
                    )})}
            </div>
        )
    }
}

export default TopNews;
