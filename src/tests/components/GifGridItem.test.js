import React from 'react';
const { shallow } = require('enzyme');
const { default: GifGridItem } = require('../../components/GifGridItem');

describe('Testing <GifGridItem />', () => {
  test('It should render correctly', () => {
    const title = 'Hola';
    const url = 'https://algo.com';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    expect(wrapper).toMatchSnapshot();
  });
});
