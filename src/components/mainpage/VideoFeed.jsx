import {React, useState} from 'react'
import Box from '@mui/material/Box'
import YouTube from 'react-youtube'
import { Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom'

const VideoFeed = (props) => {
    // 좋아요 하트
    const [btn, setBtn] = useState(true);
    const [numBtn,setNumBtn] = useState(1306);
    function onClick(){
        setBtn((current)=>!btn)
    }

    // 더보기 버튼
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <Box sx={{ height: "520px", boxShadow: "0 7px 9px -7px gray", marginTop: '60px', marginBottom: '10px', background: "#fff" }}>
        <Box sx={{ height : "350px"}}>
            <YouTube 
                videoId={props.video}
                opts={{
                    width: "755px",
                    height: "350px",
                    playerVars: {
                        autoplay: 0, //자동재생 O
                        rel: 1, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                        modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                    },
                }}
                //이벤트 리스너 
                onEnd={(e)=>{e.target.stopVideo(0);}}/>
        </Box>
        
        <Box sx={{height: "35px",display: "flex", alignItems:"center"}}>
            <Link to="FeedDetail">
            <Typography sx={{fontWeight:"bold", fontSize:"16px", marginLeft:"10px"}}>{props.title}</Typography>
            </Link>
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
                <MenuItem onClick={handleClose}>저장하기</MenuItem>
                <MenuItem onClick={handleClose}>공유하기</MenuItem>
                <MenuItem onClick={handleClose}>신고하기</MenuItem>
            </Menu>
        </Box>
        <Link to="FeedDetail">
        <Box sx={{ height: "60px", padding:"2px"}}>
            <Typography sx={{margin:"0px 10px", fontSize:"13px"}}>{props.content}</Typography>
        </Box>
        </Link>
        <Box sx={{height: '30px', display: 'flex', padding: '10px 0px 0px 10px'}}>
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
        <Box sx={{ height: '30px', paddingLeft: '10px', marginTop: '13px', display : 'flex', alignItems: 'center'}}>
            <Typography sx={{ color: '#939393', fontSize: '13px', flex: 8}}>{props.tag}</Typography>
            <Link to="Profile">
            <Typography sx={{marginRight:"6px", fontSize:"13px", fontWeight:"bold", color: "#333", float: 'left'}}>{props.nickname}</Typography> 
            <Avatar alt="Avatar" src={props.profile} sx={{ width: 19, height: 19, border: "1px solid #666", marginRight: '5px'}}/>
            </Link>
        </Box>
    </Box>
  )
}

export default VideoFeed