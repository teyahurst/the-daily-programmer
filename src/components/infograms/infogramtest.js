
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TopCheatSheets from './topCheatSheets';

// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><TopCheatSheets /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});