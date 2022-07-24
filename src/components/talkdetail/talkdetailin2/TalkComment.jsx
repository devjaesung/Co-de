import React, { useState } from 'react'
import { Grid, Box, OutlinedInput, Button } from '@mui/material';
import CommentText from './CommentText';

const TalkComment = () => {
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);

  const onChange = (e) => setComment(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if(comment === ''){
      return;
    }
    setComment("");
    setCommentArray(commentValueList => [comment, ...commentValueList]);
  };

  return (
    <>
    <Grid sx={{borderTop:"2px solid #cecece",
               borderBottom:"2px solid #cecece"}}>
      <Box>
        <form style={{display:"flex", padding:"15px"}} onSubmit={onSubmit}>
          <Box>
            <img src="/images/profile.jpg" alt="프로필 사진" className="d-profileimg" />
          </Box>
          <Box sx={{mx:"15px"}}>
            <OutlinedInput 
              sx={{height:"35px",
                   width:"500px",
                   borderRadius:"10px",
                   background:"#ededed"}}
              id="inputdata"
              type="text"
              placeholder="댓글을 입력하세요"
              value={comment}
              onChange={onChange} />
          </Box>
          <Box>
            <Button type="submit"
              sx={{height:"35px",
                   background:"#6667AB", 
                   color:"#fff", 
                   borderRadius:"10px",
                   fontSize:"16px"}}>작성
            </Button>
          </Box>
        </form>
      </Box>
    </Grid>
      <Grid>
        {
          commentArray.map((value, index) => (
            <form key={index} style={{display:"flex", padding:"15px"}}>
              <Box>
                <img src="/images/profile.jpg" alt="프로필 사진" className="d-profileimg" />
              </Box>
              <Box sx={{mx:"15px"}}>
                <p style={{height:"35px", width:"500px", borderRadius:"10px", margin:"0"}}>
                  {value}
                </p>
              </Box>
              <CommentText />
            </form>
          ))
        }
    </Grid>
    </>
  )
}

export default TalkComment