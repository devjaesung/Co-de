import React from 'react'


const CommentList = props => {
  {feedComments.map((commentArr, i)=>{
    return(
      <CommentList
          userName={userName}
          usetComment={commentArr}
          key={i}/>
    )
  })}
}

export default CommentList