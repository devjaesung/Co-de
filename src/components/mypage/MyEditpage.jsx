import React from 'react'
import Box from '@mui/material/Box'
import EditBox from './EditBox'
import RightBox from './RightBox';
import TopBar from '../Topbar';
const MyEditpage = ({Nickname,setNickname, comment, setComment, Song, setSong, Art, setArt}) => {
  return (
    <>
    <TopBar/>
    <Box
    sx={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        display: 'flex',
        left: 0,
        top: 55,
        paddingTop: 10,
        paddingLeft: 10,
        backgroundColor: '#555'
    }}
    >
    <EditBox Nickname={Nickname} setNickname={setNickname} comment={comment} Art={Art} Song={Song} setComment={setComment} setArt={setArt} setSong={setSong} />
    <Box sx={{ width: '100%', height: '100%', backgroundColor:'#555', zIndex:997, opacity: 0.8, position: 'absolute'}}></Box>
    <RightBox />

  
  </Box>
  </>
  )
}

export default MyEditpage