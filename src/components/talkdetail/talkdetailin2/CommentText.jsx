import React, { useState } from 'react'
import { Box, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const CommentText = () => {
  const [btn, setBtn] = useState(false);
  const Invert = () => {
    setBtn((current) => !btn);
  };
  return (
    <Box>
      <IconButton aria-label="heart" onClick={Invert}>
        {btn? <FavoriteIcon sx={{color:"red"}} />:<FavoriteBorderIcon/>} 
      </IconButton>
      <ChatBubbleOutlineIcon sx={{color:"#555", verticalAlign:"-8px"}} />
    </Box>
  )
}

export default CommentText