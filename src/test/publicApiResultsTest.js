
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PublicApiResults from '../components/publicApiResults/public-api-results';


// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><PublicApiResults /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});