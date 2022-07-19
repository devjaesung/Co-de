import React from 'react'
import Box from '@mui/material/Box'
import EditBox from './EditBox'
import RightBox from './RightBox';
import TopBar from '../Topbar';
const MyEditpage = () => {
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
        backgroundColor: '#555',
        zIndex: 999
    }}
    >
    <EditBox />
    <RightBox />
  
  </Box>
  </>
  )
}

export default MyEditpage