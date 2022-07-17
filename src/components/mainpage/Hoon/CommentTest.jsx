import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material';
import CommentList from './CommentList';
import styled from "styled-components";
const White = styled(TextField)`
  & label.Mui-focused {
    color: black;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;

export default function CommentTest() {
    let [userName] = useState('hacker');
    let [comment, setComment] =useState('');
    let [feedComments, setFeedComments] = useState([]);
    let [isVaild, setIsVaild] = useState(false);
    let post = e =>{
        const copyFeedComments = [...feedComments];
        copyFeedComments.push(comment);
        setFeedComments(copyFeedComments);
        setComment('');
    };
  return (
    <Box >  
        <Box sx={{display:'flex', alignItems:'center'}}>{userName}
        <White sx={{ width: '80%',
                    '& fieldset':{
                     height:'60px',
                     borderRadius:'25px',
                     backgroundColor:''
                    }}}
            placeholder='댓글을 남겨주세요.'
            onChange={e =>{
                setComment(e.target.value);
            }}
            onKeyUp={e=>{
                e.target.value.length > 0
                 ? setIsVaild(true)
                 : setIsVaild(false)
            }}
            value={comment}/>
            <Button
                className={
                    comment.length > 0
                    ? 'submitCommentActive'
                    : 'submitCommentInactive'
                }
                onClick={post}
                disabled={isVaild ? false : true}>게시</Button></Box>
        {feedComments.map((commentArr, i) =>{
            return(
                <CommentList
                    userName={userName}
                    userComment={commentArr}
                    key={i}/>
            );
        })}
</Box>

  )
}