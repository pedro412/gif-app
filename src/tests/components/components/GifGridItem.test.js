import React from 'react';
import '@testing-library/jest-dom';
const { shallow } = require('enzyme');
const { default: GifGridItem } = require('../../../components/GifGridItem');

describe('testing <GifGridItem />', () => {
  const title = 'Hola';
  const url = 'https://algo.com';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('it should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('it should containt a paragraph with the title', () => {
    const p = wrapper.find('p');
    expect(p.text()).toBe(title);
  });

  test('it should contain an img tag with the src equal as the img url passed', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
  });

  test('it should contain the class grid-item', () => {
    const div = wrapper.find('div');
    expect(div.hasClass('grid-item')).toBeTruthy();
  });
});
