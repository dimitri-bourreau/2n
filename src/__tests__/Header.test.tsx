import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Header from '../components/Header';

describe('<Header />', () => {
  test('Header component should match snapshot', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Header should render correctly', () => {
    const root = document.createElement('div');
    ReactDOM.render(<Header />, root);
    expect(root.querySelector('#header')).not.toBeNull();
  });
});
