import React from 'react'
import Box from '@mui/material/Box'
import LeftBox from './LeftBox';
import RightBox from './RightBox';
import EditBox from './EditBox';
import TopBar from '../Topbar';


const Mypage = () => {
  return (
    <>
    <TopBar/>
    <Box
    sx={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        display: 'flex',
        left: 10,
        top: 55,
        paddingTop: 10,
        paddingLeft: 10,
        backgroundColor: '#f5f5f5'
    }}
    >
    {/* <LeftBox /> */}
    <EditBox />
    <RightBox />
  
  </Box>
  </>
  )
}

export default Mypage
