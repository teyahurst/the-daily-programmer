import React from 'react';
import { Route } from 'react-router-dom';
import ApiContext from './ApiContext'

import newsList from './newsList';

import Header from './components/header/header';
import NewsList from './components/newsList/newsList';
import PublicApi from './components/public-api/public-api';
import CheatSheets from './components/infograms/CheatSheets';
import TopNews from './components/topNews/TopNews';
import TopCheatSheets from './components/infograms/topCheatSheets';




class App extends React.Component{
  state = {
    newsList: newsList.articles
    
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
      newsList: this.state.newsList,
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