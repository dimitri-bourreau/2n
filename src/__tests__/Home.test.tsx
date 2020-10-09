import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from '../components/Home';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation(init => [init, setState]);

  beforeEach(() => {
    wrapper = Enzyme.shallow(<Home />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Launch game', () => {
    it('should set gameIsOn to true', () => {
      wrapper.find('#play-game-button').props().onClick();
      expect(setState).toHaveBeenCalledWith(true);
    });
  });
});
