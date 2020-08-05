import React from 'react';
import '@testing-library/jest-dom';
const { shallow } = require('enzyme');
const { default: AddCategory } = require('../../../components/AddCategory');

describe('Testing <AddCategory />', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('it should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('it should change the input box', () => {
    const input = wrapper.find('input');
    const value = 'asd';
    input.simulate('change', { target: { value } });
  });

  test('should not send submit if string length is < 2', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should call setCategories and clean input', () => {
    const value = 'asd';
    const input = wrapper.find('input');

    input.simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop('value')).toBe('');
  });
});
