
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PublicApiResultsList from '../components/publicApiResultsList/public-api-results-list';


// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><PublicApiResultsList /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});