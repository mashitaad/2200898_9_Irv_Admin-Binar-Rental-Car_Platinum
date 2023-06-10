import React, { useState } from 'react';

function ImageWithLoading({ src, alt }) {
  const [loading, setLoading] = useState(true);

  const handleImageLoaded = () => {
    setLoading(false);
  };

  const handleImageError = () => {
    setLoading(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      {loading && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'gray', opacity: 0.5 }}></div>}
      <img src={src} alt={alt} onLoad={handleImageLoaded} onError={handleImageError} style={{ opacity: loading ? 0.5 : 1 }} />
    </div>
  );
}

export default ImageWithLoading;
