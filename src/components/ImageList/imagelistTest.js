
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import imageList from './imageList';

// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><imageList /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});