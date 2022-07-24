import {React,useState} from 'react'
import { Box, Avatar, Typography, IconButton, Menu, MenuItem } from '@mui/material'
import {  Chat, MoreHoriz,Favorite,FavoriteBorder} from '@mui/icons-material';
import {Link} from 'react-router-dom';


const FeedContent = (props) => {
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
    <Box sx={{backgroundColor: "#fff",boxShadow: '0 7px 9px -7px gray', marginBottom:'10px', width:"100%"}}>
      <Box sx={{display: 'flex'}}  width="100%">
      <img src={props.thumbnail} alt="thumbnail-1" style={{width:"180px", height:"150px"}} />
        
        <Box paddingLeft={2} width="100%" position="relative">
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
      >
        <MenuItem onClick={handleClose}>저장하기</MenuItem>
        <MenuItem onClick={handleClose}>공유하기</MenuItem>
        <MenuItem onClick={handleClose}>신고하기</MenuItem>
      </Menu>
    </Box>
            <Link to="/FeedDetail">
            <Typography variant='subtitle1' component="h2" fontSize={16} fontWeight={"bold"}>
               {props.title} 
                <span style={{color:"#999",fontSize:"10px", fontWeight:"regular", marginLeft:"5px"}}>{props.day}일전</span>
            </Typography>

            <Typography variant='body1' component="p" color={"#333"} fontSize={12} paddingRight={20} width='80%' overflow='hidden' whiteSpace='nowrap'>
            {props.content}
            </Typography>
            <Typography variant='body1' component="p" fontSize={12} color={"#666"} sx={{position:"absolute", bottom:"35px"}}>
            {props.hashtag}
            </Typography>
            </Link>
            <Box sx={{position:"absolute", bottom:0,width:'90%'}}>
            <Box sx={{display:"flex",alignItems:"flex-end",float:'right'}}>
              <Avatar alt="profile image" src="images/profile.jpg" sx={{width:"24px",height:"24px", marginRight:"5px"}}/>
              <Typography variant='body2' component="p" >Nickname</Typography>
            </Box>
            <Typography variant='body2' component="p">
              <span onClick={Invert}>
              {btn? <FavoriteBorder sx={{color: "#e64a3d"}}/>:<Favorite sx={{color: "#e64a3d"}}/>}
              <span style={{color:"#e64a3d"}}>{btn? numOfBtn : numOfBtn + 1 }</span>
                </span>
                <Chat sx={{marginLeft: "10px"}}/>
                {props.chat}
            </Typography>
            
            

            </Box>

        </Box>

        </Box>
      </Box>
  )
}

export default FeedContent