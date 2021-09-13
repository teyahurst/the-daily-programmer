// make React available
import React from 'react';

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// make the App component available
import Header from '../components/header/header';

// this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<BrowserRouter><Header /></BrowserRouter>, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});