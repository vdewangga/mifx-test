import React from 'react';

const CardImage = ({ image }) => (
  <img
    alt="placeholder"
    src={image}
    style={{
      maxWidth: '175px',
      overflowClipMargin: 'content-box',
      overflow: 'clip',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
    }}
    onError={({ currentTarget }) => {
      currentTarget.onerror = null; // prevents looping
      currentTarget.src = "https://via.placeholder.com/400";
    }}
  />
)

export default CardImage;