import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Layout from '../components/Layout';

describe('<Layout />', () => {
  test('Layout component should match snapshot', () => {
    const tree = renderer.create(<Layout />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Layout should render correctly', () => {
    const root = document.createElement('div');
    ReactDOM.render(<Layout />, root);
    expect(root.querySelector('#layout')).not.toBeNull();
    expect(root.querySelector('#router-wrapper')).not.toBeNull();
  });
});
