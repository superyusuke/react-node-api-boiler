'use strict'
import React from 'react'

const PostButton = ({post}) => {
  return (
    <button onClick={()=>{post()}}>This is fetch button.</button>
  )
}

export default PostButton