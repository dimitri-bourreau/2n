import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { getQueriesForElement } from '@testing-library/dom';

import App from './App';

test('App component should match snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('App should render correctly', () => {
  const { getByText } = getQueriesForElement(root);
  const root = document.createElement('div');
  ReactDOM.render(<App />, root);
  expect(root.querySelector('h1').textContent).toBe('2n');
});
