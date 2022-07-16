import React from 'react'

const TagsList = (td) => {
  return (
    <span>
      <label id="tagWrap">
        <input type="checkbox" id="tagCheck" value="{td.category}" />
        <span id="tagName">{td.category}</span>  
      </label>
    </span>
  )
}

export default TagsList