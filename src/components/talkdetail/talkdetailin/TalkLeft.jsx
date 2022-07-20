import React, { useState } from 'react'
import { Grid, Box, IconButton, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TalkComment from '../talkdetailin2/TalkComment';

const TalkLeft = () => {
  const [btn, setBtn] = useState(false);
  const [heartNum, setHeartNum] = useState(128);
  const [anchorEl, setAnchorEl] = useState(null);

  const Invert = () => {
    setBtn((current) => !btn);
  };  

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <Grid item 
      sx={{width:"789px",
           height:"100%",
           mr:"20px", 
           background:"#fff",
           p:"16px"}}>
      <Grid sx={{display:"flex", justifyContent:"space-between"}}>
        <Box>
          <img src="/images/profile.jpg" className="d-profile" alt="프로필사진" />
          <span className="d-nickname">Nick Name</span>
        </Box>
        <Box>
          <IconButton>
            <MoreHorizIcon 
              onClick={handleClick} />
          </IconButton>
          <Menu 
            anchorEl={anchorEl}
            onClose={handleClose}
            open={Boolean(anchorEl)}>
            <MenuItem onClick={handleClose}>저장하기</MenuItem>
            <MenuItem onClick={handleClose}>공유하기</MenuItem>
            <MenuItem onClick={handleClose}>신고하기</MenuItem>
          </Menu>
        </Box>
      </Grid>
      <Grid>
        <p className="d-talktitle">
          글제목입니다. <span className="d-uploaddt">2일 전</span>
        </p>
        <p>
          커다란 앞이 풍부하게 말이다. 품고 쓸쓸한 있는 무한한 열매를 주는 뜨거운지라, 그리하였는가? 바이며, 위하여서, 무엇을 품에 뿐이다. 위하여 얼마나 그들에게 있는 같으며, 이것이다. 우리는 천고에 가치를 보이는 이 귀는 기관과 부패뿐이다. 풍부하게 싸인 그들은 모래뿐일 같지 사막이다. 품었기 청춘 이상의 않는 있다. 위하여 소리다.
        </p>
        <p style={{marginTop:"50px"}}>
          <span id="d-talktag">노래추천</span>
          <span id="d-talktag">팝송</span>
        </p>
      </Grid>
      <Grid>
        <IconButton aria-label="heart" onClick={Invert}>
          {btn?  <FavoriteIcon sx={{color:"red"}} />:<FavoriteBorderIcon/>} 
        </IconButton>
        <span>{btn ? heartNum+1:heartNum}</span>
        <ChatBubbleOutlineIcon
          sx={{color:"#555", 
               verticalAlign:"-8px", 
               ml:"15px", 
               mr:"7px"}} />
        <span>1564</span>
      </Grid>
      <TalkComment />
    </Grid>
  )
}

export default TalkLeft