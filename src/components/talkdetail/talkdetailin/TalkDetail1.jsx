import React, { useState } from 'react'
import { Grid, Box, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TalkComment from './TalkComment';
import './talk.css';

const TalkDetailIn = () => {
  const [btn, setBtn] = useState(false);
  const Invert = () => {
    setBtn((current) => !btn);
  };
  return (
    <>
      <Grid sx={{display:"flex", justifyContent:"space-between"}}>
        <Box>
          <img src="/images/profile.jpg" className="d-profile" alt="프로필사진" />
          <span className="d-profilename">Nick Name</span>
        </Box>
        <Box>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </Box>
      </Grid>
      <Grid>
        <p className="d-talktitle"><strong>글제목!</strong><span style={{fontSize:"13px", color:"#555", marginLeft:"10px"}}>2일 전</span></p>
        <p>
          커다란 앞이 풍부하게 말이다. 품고 쓸쓸한 있는 무한한 열매를 주는 뜨거운지라, 그리하였는가? 바이며, 위하여서, 무엇을 품에 뿐이다. 위하여 얼마나 그들에게 있는 같으며, 이것이다. 우리는 천고에 가치를 보이는 이 귀는 기관과 부패뿐이다. 풍부하게 싸인 그들은 모래뿐일 같지 사막이다. 품었기 청춘 이상의 않는 있다. 위하여 소리다.
        </p>
        <p style={{marginTop:"50px"}}>
          <span id="talktag">노래추천</span>
          <span id="talktag">팝송</span>
        </p>
      </Grid>
      <Grid>
        <IconButton aria-label="heart" onClick={Invert}>
          {btn?  <FavoriteIcon color='primary'  />:<FavoriteBorderIcon/>} 
        </IconButton>
        <span>1564</span>
        <ChatBubbleOutlineIcon sx={{color:"#555", verticalAlign:"-8px", ml:"15px", mr:"7px"}} />
        <span>200</span>
      </Grid>
      <TalkComment />
    </>
  )
}

export default TalkDetailIn