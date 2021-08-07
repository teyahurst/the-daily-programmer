import React from 'react';
import './results.css';




class Results extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            article_id: props.id,
            likes: props.likes,
            dislikes: props.dislikes
        }
    }

    

    handleVote(vote){
        
         return fetch('https://stark-plains-19583.herokuapp.com/articles', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(vote)
        })
    }



    handleUpvote = () => {

        const vote = {
            article_id: this.props.id,
            likes: this.state.likes + 1
        }
        

        this.handleVote(vote)
        
        .then(() => {
            this.setState({
                likes: this.state.likes + 1
            })
        })
        
    }

    handleDownvote = () => {
        const vote = {
            article_id: this.props.id, 
            dislikes: this.state.dislikes + 1
        }

        this.handleVote(vote)

        .then(() => {
            this.setState({
                dislikes: this.state.dislikes + 1
            })
        })
    }
        

    
    
    render(){
        const { title, url, urlToImg, content  } = this.props;
        
       
        
        return (
            <div className='Results'>
                
                <a className='Results-Link' href={url} target="_blank" rel='noreferrer' name='article_url'>
                    <button className='results-button'>
                        <ul className='item'>
                            
                            <li className='article-id'></li>
                            <li className='title'>{title}</li>
                            <li className='news-img-url'><img src={urlToImg} className='news-img' alt='img'/></li>
                            <br/>
                            <br />
                            <li className='description'>{content}</li>
                            
                        </ul>
                    </button>
                </a>
                
                <button onClick={this.handleUpvote}>Likes {this.state.likes}</button>
                <button onClick={this.handleDownvote}>Dislikes {this.state.dislikes}</button>
                
                
                
                
                
            </div>
        )
    }
}

export default Results;