'use strict'
import React from 'react'

const FetchButton = ({post}) => {
  return (
    <button onClick={()=>{post()}}>This is fetch button.</button>
  )
}

export default FetchButton