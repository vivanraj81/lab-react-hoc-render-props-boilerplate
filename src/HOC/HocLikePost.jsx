import React from 'react';
import hocFunction from './hocFunction';

function HocLikePost({ likeCounter, handleLikeCount }) {
  return (
    <div>
      <button onClick={handleLikeCount}>Like Post {likeCounter}</button>
    </div>
  );
}

export default hocFunction(HocLikePost);
