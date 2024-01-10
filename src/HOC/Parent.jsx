import React from 'react'
import HocLikeImage from './HocLikeImage'
import HocLikePost from './HocLikePost'

function Parent() {
  return (
    <div>
    <h3>Higher Order Function</h3>
    <div className='buttons'>
    <HocLikeImage/>
    <HocLikePost/>
    </div>
    </div>
  )
}

export default Parent