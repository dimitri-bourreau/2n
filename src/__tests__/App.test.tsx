import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
  test('App component should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('App should render correctly', () => {
    const root = document.createElement('div');
    ReactDOM.render(<App />, root);
    expect(root.querySelector('#app')).not.toBeNull();
  });
});
