import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material';
import CommentList from './CommentList';
import styled from "styled-components";
import PersonIcon from '@mui/icons-material/Person';


const White = styled(TextField)`
  & label.Mui-focused {
    color: black;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: black;
    }
  }
`;

export default function CommentTest() {
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
        <Box sx={{display:'flex', alignItems:'center'}}>
          <PersonIcon/>
        <White sx={{ width: '80%',
                     marginLeft:'10px',
                    '& fieldset':{
                      marginTop:'10px',
                     height:'40px',
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
            <Button sx={{
              marginLeft:'10px',
              backgroundColor: '#dddddd',
              color: '#8b8b8d',
              borderRadius:'30px',
              ':hover': {
                bgcolor: '#6667AB', 
                color: 'white',
               }
            }}
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
                    userComment={commentArr}
                    key={i}/>
            );
        })}
</Box>

  )
}
