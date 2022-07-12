import React, { useState } from 'react'
import { Grid, Box, OutlinedInput, Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const TalkComment = () => {
  const [iconColor, setIconColor] = useState('#555');
  const colorChange = (e) => {
    setIconColor(iconColor === '#555' ? 'red':'#555');
  }
  return (
    <>
      <Grid sx={{borderTop:"2px solid #cecece", borderBottom:"2px solid #cecece"}}>
        <Grid sx={{display:"flex", py:"15px", px:"10px"}}>
          <Box>
            <img src="/images/profile.jpg" className="d-talkprofile" alt="프로필사진" />
          </Box>
          <Box sx={{mx:"15px"}}>
            <OutlinedInput placeholder="댓글을 남겨주세요" 
              sx={{height:"35px", 
                   background:"#dedede", 
                   borderRadius:"10px",
                   width:"450px"}} />
          </Box>
          <Box>
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
        <Grid sx={{display:"flex", py:"15px", px:"10px"}}>
          <Box>
            <img src="/images/profile.jpg" className="d-talkprofile" alt="프로필사진" />
          </Box>
          <Box sx={{mx:"15px"}}>
            <p style={{width:"450px", margin:"0", fontSize:"14px"}}>
              커다란 앞이 풍부하게 말이다. 품고 쓸쓸한 있는 무한한 열매를 주는 뜨거운지라, 그리하였는가? 바이며, 위하여서, 무엇을 품에 뿐이다.
            </p>
          </Box>
          <Box>
            <IconButton aria-label="heart" onClick={colorChange}>
              <FavoriteIcon style={{color:iconColor}}/>
            </IconButton>
            <ChatBubbleOutlineIcon sx={{color:"#555", verticalAlign:"-8px"}} />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default TalkComment