import React from 'react';
import hocFunction from './hocFunction';

function HocLikeImage({ likeCounter, handleLikeCount }) {
  return (
    <div>
      <button onClick={handleLikeCount}>Like Image {likeCounter}</button>
    </div>
  );
}

export default hocFunction(HocLikeImage);
