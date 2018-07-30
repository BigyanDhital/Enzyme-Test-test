/* global it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import {App} from './App';
import {initialState} from './reducers';


it('App renders without crashing', () => {

  const mockFunciton =jest.fn();

  const component = shallow(
  <App
  state={initialState}
  submitTodo={mockFunciton}
     />,
    
    );
  expect(component.exists()).toEqual(true);
});
