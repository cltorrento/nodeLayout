import React from 'react';
import ReactDOM from 'react-dom';
import Developers from './Developers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Developers />, div);
  ReactDOM.unmountComponentAtNode(div);
});
