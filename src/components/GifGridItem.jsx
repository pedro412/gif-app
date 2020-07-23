import React from 'react';

const GifGridItem = ({ title, url }) => {
  return (
    <div className="grid-item">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
