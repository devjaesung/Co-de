import React, { useState } from 'react'
import { Grid, Box , IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const CommentText = (data) => {
  const [btn, setBtn] = useState(data.boolean);
  const Invert = () => {
    setBtn((current) => !btn);
  }
  return (
    <Grid sx={{display:"flex", py:"15px", px:"10px"}}>
      <Box>
        <img src="/images/profile.jpg" className="d-talkprofile" alt="프로필사진" />
      </Box>
      <Box sx={{mx:"15px"}}>
        <p style={{width:"450px", margin:"0", fontSize:"14px"}}>{data.review}</p>
      </Box>
      <Box>
        <IconButton aria-label="heart" onClick={Invert}>
          {btn? <FavoriteIcon color='primary'  />:<FavoriteBorderIcon/>} 
        </IconButton>
        <ChatBubbleOutlineIcon sx={{color:"#555", verticalAlign:"-8px"}} />
      </Box>
    </Grid>
  )
}

export default CommentText