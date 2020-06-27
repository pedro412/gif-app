import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const initialState = ['Rick and morty'];

const GifExpertApp = () => {
  const [categories, setCategories] = useState(initialState);

  return (
    <>
      <h2>Gif expert app</h2>
      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
