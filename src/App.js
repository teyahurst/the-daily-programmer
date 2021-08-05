require('.dotenv').config()

import React from 'react';
import { Route } from 'react-router-dom';
import ApiContext from './ApiContext'



import Header from './components/header/header';
import NewsList from './components/newsList/newsList';
import PublicApi from './components/public-api/public-api';
import CheatSheets from './components/infograms/CheatSheets';
import TopNews from './components/topNews/TopNews';
import TopCheatSheets from './components/infograms/topCheatSheets';

import { news_endpoint, articles_endpoint }  from ('./config')




class App extends React.Component{
  state = {
    articles: [],
  
  }

  componentDidMount(){
    
    
    fetch(news_endpoint)
      .then(res => res.json())
         

    fetch(articles_endpoint)
      .then(res => res.json())
      .then(articles => {
        this.setState({
          articles: articles,

          
        })
      })
   
    
  }

 
  
  

  


  

  renderMain(){
   

    return(
    <div>
      <Route exact path={'/'} component={TopNews}/>
      <Route path={'/news'} component={NewsList}/>
      <Route path={'/cheatsheets'} component={CheatSheets}/>
      <Route path={'/public-apis'} component={PublicApi}/>
      <Route exact path={'/'} component={TopCheatSheets}/>

      
      
    </div>
    )
  }


  render(){
   
   
    const value = {
      articles: this.state.articles,
      likes: this.state.likes,
      dislikes: this.state.dislikes
    }    

    

    return (
      <ApiContext.Provider value={value}>
        <div className='App'>
          <div className='App-Header-and-Nav'>
            <Header/>
          </div>
          <main className='App-Main'>
            {this.renderMain()}
            
            
            
            
          </main>
        </div>
      </ApiContext.Provider>
    )
  }
}

export default App;