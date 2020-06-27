import React, { useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';

const API_KEY = 'prSUIN2A5rKqnYkLjWQpOFZufhM0DF7w';

const GifGrid = ({ category }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getGifs(category);
  }, [category]);

  const getGifs = (category) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`,
      {
        method: 'GET',
      }
    )
      .then((resp) => resp.json())
      .then((resp) => {
        setItems(resp.data);
      });
  };

  return (
    <div>
      <h3>{category}</h3>

      {items.map((item) => (
        <GifGridItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default GifGrid;
