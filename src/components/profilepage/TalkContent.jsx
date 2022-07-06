import {React,useState} from 'react'
import { Box, Avatar, Typography, Divider, IconButton, Menu, MenuItem } from '@mui/material'
import {  Chat, MoreHoriz,ThumbUpAlt,ThumbUpOffAlt } from '@mui/icons-material';

const ITEM_HEIGHT = 48;

const TalkContent = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const [btn,setBtn] = useState(props.boolean);
    const [numOfBtn,setNumOfBtn] = useState(props.like);

    const Invert = () =>{
          setBtn((current)=>!btn)
      }


  return (
    <Box sx={{backgroundColor: "#fff",boxShadow: '0 7px 9px -7px gray', marginBottom:'10px', paddingLeft:'5px'}}>
      <Box sx={{marginRight: 2, float:"right"}}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
            <MoreHoriz sx={{ color:"#999"}}/>
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '100px',
          },
        }}
      >
        <MenuItem onClick={handleClose}>저장하기</MenuItem>
        <MenuItem onClick={handleClose}>공유하기</MenuItem>
        <MenuItem onClick={handleClose}>신고하기</MenuItem>
      </Menu>
    </Box>

      <Typography variant='subtitle1' component="h2" fontSize={16} fontWeight={"bold"} >
        {props.title}
        <span style={{color:"#999",fontSize:"10px", fontWeight:"regular", marginLeft:"5px"}}>{props.day}일전</span>
      </Typography>
      <Divider sx={{width: "246px"}}/>
      <Typography variant="body2" component="p" fontSize={14} color={"#666"} marginRight={20} sx={{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis", width:'400px'}}>
          {props.content}
      </Typography>
      <Typography variant='body2' component='p' fontSize={12} sx={{color:"#666", marginTop: 3}}>
          {props.hashtag}
        </Typography>
        <Box sx={{float:"right",display:"flex",alignItems:"flex-end"}} marginRight={2}>
         <Avatar alt="profile image" src="images/profile.jpg" sx={{width:"24px",height:"24px", marginRight:"5px"}}/>
         <Typography variant='body2' component="p" >Nickname</Typography>
        </Box>
        
        <Typography variant='body2' component="p" marginTop={1}>

          <span onClick={Invert}>
            {btn? <ThumbUpOffAlt/> : <ThumbUpAlt color='primary'/>}
            {btn? numOfBtn : numOfBtn + 1 }
                </span>
            <Chat fontSize='small' sx={{marginLeft: "10px"}}/>
              {props.chat}   
        </Typography>

    </Box>
  )
}

export default TalkContent