/* global expect, it, describe */

import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from '.';

describe('AddTodo component', () => {
  it('Should render successfully', () => {
    const component = shallow(<AddTodo />);
    expect(component.exists()).toEqual(true);
  });

  it('Should have one input', () => {
    const component = shallow(<AddTodo />);
    expect(component.find('.todo-input').length).toEqual(1);
  });

  describe('Add todo button', () => {
    it('Should exist', () => {
      const component = shallow(<AddTodo />);
      expect(component.find('.todo-submit').length).toEqual(1);
    });

    it('Should call the submitTodo function when clicked', () => {
      const submitMock = jest.fn();
      const component = mount(<AddTodo submitTodo={submitMock} />);

      expect(submitMock.mock.calls.length).toEqual(0);
      component.find('form').simulate('submit');
      expect(submitMock.mock.calls.length).toEqual(1);
    });
  });
});
