import React, { useState } from 'react'
import { Grid, Box, OutlinedInput, Button } from '@mui/material';
import CommentText from './CommentText';
const TalkComment = () => {
  const [review, setReview] = useState('');
  const [reviewArray, setReviewArray] = useState([
    {id:"아이디1" ,review: review},
  ]);

  const handleTotal = (e) => {
    setReview(e.target.value);
  };

  const handleEnter = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      const reArray = [...reviewArray];
      if(e.target.value !== ''){
        reArray.push({id:'아이디1', review: review});
      }
      setReviewArray(reArray);
      e.target.value = '';
    }
  };
  return (
    <>
      <Grid sx={{borderTop:"2px solid #cecece", borderBottom:"2px solid #cecece"}}>
        <Grid sx={{display:"flex", py:"15px", px:"10px"}}>
          <Box>
            <img src="/images/profile.jpg" className="d-talkprofile" alt="프로필사진" />
          </Box>
          <Box sx={{mx:"15px", pt:"3px"}}>
            <OutlinedInput className="reviewInput" placeholder="댓글을 남겨주세요" 
              onKeyPress = { e => {
                handleEnter(e);
              }}
              onKeyUp = { e => {
                handleTotal(e);
              }}
              sx={{height:"35px", 
                   background:"#dedede", 
                   borderRadius:"10px",
                   width:"450px",
                   mr:"15px"}} />
            <Button 
              sx={{height:"35px",
                   background:"#6667AB", 
                   color:"#fff", 
                   borderRadius:"10px",
                   fontSize:"16px"}}>작성</Button>
          </Box>
        </Grid>
      </Grid>
      <Grid>
        {
          (reviewArray.map(data => {
            return (
            <CommentText 
              key={data.id}
              id={data.id}
              review={data.review}  />)
            }))
        }
      </Grid>
    </>
  )
}

export default TalkComment