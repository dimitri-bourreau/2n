import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import LangDropDown from '../components/LangDropDown';

describe('<LangDropDown />', () => {
  test('LangDropDown component should match snapshot', () => {
    const tree = renderer.create(<LangDropDown />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('LangDropDown should render correctly', () => {
    const root = document.createElement('div');
    ReactDOM.render(<LangDropDown />, root);
    expect(root.querySelector('#langDropDown')).not.toBeNull();
    expect(
      root.querySelector('#langDropDown button.btn.btn-white'),
    ).not.toBeNull();
  });
});
