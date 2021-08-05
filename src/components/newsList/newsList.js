import React from 'react';
import ApiContext from '../../ApiContext';
import './newsList.css';


import Results from '../results/results';

class NewsList extends React.Component{
    
    
   
    
    
    static contextType = ApiContext;
    render() {
        const { articles } = this.context;

        articles.sort((a, b) => {
            return (b.likes)-(a.likes)
          })
        
        

        return (
            
            <div className='newsList'>
                <h2>News</h2>
               
                    {articles.map((article) => {
                        
                        return(
                            
                        <ul className='NewsList' key={article.article_id}>
                            <li className='NewsResults'>
                                
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

export default NewsList;