import React from 'react';
import './public-api.css'
import PublicApiForm from '../publicApiForm/publicApiForm';
import PublicApiResultsList from '../publicApiResultsList/public-api-results-list';

class PublicApi extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            publicApis: [],
            searchValid: false,
            search: '',
            validationMessages: {
                name: '',
            }
        }
    }



    validateSearch(fieldValue){
        const fieldErrors = {...this.state.validationMessages};
        let hasError = false;

        fieldValue = fieldValue.trim();
        if(fieldValue.length === 0) {
            fieldErrors.search='Search is Required';
            hasError = true;
        }

        this.setState({
            validationMessages: fieldErrors,
            nameValid: !hasError
        }, this.searchValid);
    }

    searchValid(){
        this.setState({
            searchValid: this.state.nameValid
        })
    }

    updateSearch(search){
        this.setState({search}, () => {this.validateSearch(search)})
    }
        
    

    handleSubmit = (e) => {
        e.preventDefault()
        
        const search = e.target['search'].value
        
       
        fetch(`https://api.publicapis.org/entries?category=${search}`)
        .then(response => response.json())
        .then(data => 
            this.setState({
                publicApis: data.entries
            })
        )
    }

    

    render(){

        

        return(
           <div className='public-api'>
               <h4>Search for a category and receive a list of free public API's</h4>
               <br/>
               <PublicApiForm onSubmit={this.handleSubmit}>
                   <div className='field'>
                       <label htmlFor='public-api-input'>
                           Category
                       </label>
                       <input type='text' id='category-input' name='search' onChange={e => this.updateSearch(e.target.value)} required/>
                       <button className='submit-button' type='submit'>Enter</button>
                   </div>
               </PublicApiForm>
               <PublicApiResultsList
                    publicApis={this.state.publicApis}/>
                
           </div> 
        )
    }
}

export default PublicApi;