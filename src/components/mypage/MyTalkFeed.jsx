import {React, useState} from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const MyTalkFeed = (props) => {
  const [btn, setBtn] = useState(true);
  const [numBtn,setNumBtn] = useState(13);


  function onClick(){
      setBtn((current)=>!btn)
  }

  //더보기 버튼
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <Box sx={{ width: 960, height: 160, backgroundColor: '#fff', border: 1, borderColor: '#949494', marginBottom: 2}}>

    <Box sx={{ width: 930, height: 30, display: 'flex', marginLeft: 2, marginTop: 1 }}>
        <Box sx={{ width: 350, height: 30, borderBottom: 1, borderColor: '#c1c1c1', display: 'flex'}}>
            <Typography variant="h7" sx={{
                fontWeight: 'bold',
                marginLeft: 1,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: 250
            }}>{props.title}</Typography>
            <Typography sx={{
                fontSize: '11px',
                color: '#989898',
                marginTop: 1.3,
                marginLeft: 2,
            }}>1일전</Typography>
        </Box>
            <IconButton sx={{marginLeft: 'auto'}}
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreHorizIcon sx={{color: '#a7a7a7', fontSize: "30px", ':hover': {color: '#333'}}} />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>수정하기</MenuItem>
                <MenuItem onClick={handleClose}>공유하기</MenuItem>
                <MenuItem onClick={handleClose}>삭제하기</MenuItem>
            </Menu>
    </Box>
    <Box sx={{ width: 700, height: 70, marginLeft: 4, marginTop: 1.6}}>
        <Typography sx={{
            color: '#666',
            fontSize: '15px'
        }}> {props.text}</Typography>
    </Box>

    <Box sx={{ width: 920, height: 30, marginTop:1, marginLeft: 3, display: 'flex'}}>
        <Typography sx={{
            color: '#939393',
            fontSize: '14px'
        }}>#노래추천 #팝송</Typography>

        <Box sx={{height: 30, marginLeft: 'auto', display: 'flex'}}>
        <span onClick={onClick} cursor>
            {btn? <FavoriteBorder sx={{color: "#e64a3d"}}/>:<Favorite sx={{color: "#e64a3d"}}/>}
        </span>
            <Typography sx={{
                color: '#e64a3d',
                fontSize: '14px',
                fontWeight:'bold',
                marginTop:0.4,
                marginLeft: 0.3
            }}>{btn? numBtn:numBtn+1}</Typography>
            <ChatBubbleOutlineIcon
            sx={{ fontSize : '20px', marginLeft: 2, marginTop: 0.5}}
            ></ChatBubbleOutlineIcon>
            <Typography sx={{
                fontSize: '14px',
                fontWeight:'bold',
                marginLeft: 0.5,
                marginTop: 0.5
            }}>222</Typography>
        </Box>
    </Box>

  </Box>
  )
}

export default MyTalkFeed