import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs({ category });

  return (
    <div>
      <h3>{category}</h3>

      {loading && <p>Loading...</p>}

      {images.map((item) => (
        <GifGridItem key={item.id} {...item} />
      ))}
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
