import React, { memo } from 'react';

const FeedImage = ({ src, id }) => {
  return <img src={src} decoding="async" loading="lazy" alt={id} />;
};

export default memo(FeedImage);
