import React from 'react';

function Image({ src, alt, width, height }) {
  return (
    <div id="image-container">
      <a href="https://rome.com/">
        <img id="image" src={src} alt={alt} style={{ width, height }} />
      </a>
    </div>
  );
}

export default Image;