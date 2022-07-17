import React,{useState} from 'react'
import { Box, Typography } from '@mui/material'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const CommentList = (props) => {
    const [btn, setBtn] = useState(true);
    const [numBtn,setNumBtn] = useState(13);
    const [chatCount,setchatCount] = useState(250);
  
    function onClick(){
        setBtn((current)=>!btn)
    }
  
  return (
    <Box sx={{display:'flex', alignItems:'center' ,width:'598px'}}>
        <Typography sx={{margin:3}}>{props.userName}</Typography>
        <Box sx={{margin:3}}>{props.userComment}</Box>
                            <Typography sx={{display:'flex',flexWrap:'nowrap',marginLeft:'auto'}}>
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
                            </Typography>
        
    </Box>
  )
}

export default CommentList