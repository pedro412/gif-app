import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs({ category });

  return (
    <div>
      <h3>{category}</h3>

      {loading && <p>loading...</p>}

      {images.map((item) => (
        <GifGridItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default GifGrid;
