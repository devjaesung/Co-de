import React from 'react'

const GenreList = (gd) => {
  return (
    <label id="tagWrap">
      <input type="checkbox" id="tagCheck" value="{gd.category}" />
      <span id="tagName">{gd.category}</span>  
    </label>
  )
}

export default GenreList