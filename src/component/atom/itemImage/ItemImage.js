import React from 'react';

const ItemImage = ({ images }) => (
  <img
    alt="placeholder"
    src={images}
    style={{
      maxWidth: '80px',
      overflowClipMargin: 'content-box',
      overflow: 'clip',
      borderRadius: '4px',
    }}
    onError={({ currentTarget }) => {
      currentTarget.onerror = null; // prevents looping
      currentTarget.src = "https://via.placeholder.com/400";
    }}
  />
)

export default ItemImage;