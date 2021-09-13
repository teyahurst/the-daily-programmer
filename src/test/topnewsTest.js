
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TopNews from '../components/topNews/TopNews';


// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><TopNews /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});