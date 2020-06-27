import React from 'react';

const GifGridItem = ({ title, images }) => {
  return (
    <div className="grid-item">
      <img src={images.downsized.url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
