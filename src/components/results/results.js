import React from 'react';
import './results.css';
import thumbsup from '../infograms/images/images/thumbs-up.png'
import thumbsdown from '../infograms/images/images/thumbs-down.png'





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
                            
                            <li className='article'>
                                <div className='article-thumbnail-container'>
                                    <img className='news-img' src={urlToImg} alt='articlethumbnail'/>
                                </div>
                                <h3 className='title'>{title}</h3>
                                <p className='description'>{content}</p>
                                
                            </li>
                                            
                        </ul>
                        
                       
                        
                    </button>
                </a>
                <div className='likes-dislikes-container'>
                                <button onClick={this.handleUpvote} className='likes-button'><img src={thumbsup} className='thumbs-up-icon' alt='thumbs-up'/> <p className='likes-num'>{this.state.likes}</p></button>
                                <button onClick={this.handleDownvote} className='dislikes-button'><img src={thumbsdown} className='thumbs-down-icon' alt='thumbs-down'/><p className='dislikes-num'>{this.state.dislikes}</p></button>
                            </div>
                
                
                
                
                
                
            </div>
        )
    }
}

export default Results;