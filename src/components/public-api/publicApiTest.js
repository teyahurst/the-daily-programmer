
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PublicApi from './public-api';


// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><PublicApi/></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});