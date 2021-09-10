
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NewsList from './newsList';

// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><NewsList /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});