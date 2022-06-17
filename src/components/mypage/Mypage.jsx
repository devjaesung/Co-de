import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';
import { fontWeight } from '@mui/system';

const Mypage = () => {
  return (
    <Container
    sx={{
        paddingTop:20,
        marginLeft:-30
    }}
    >
    <Box
    sx={{
      width: 370,
      height: 740,
      border: 1,
      borderColor: '#e6e6e6'
    }}
  >
        <Box
        sx={{
            width: 320,
            height: 60,
            borderBottom:1,
            borderColor: '#b5b5b5',
            // backgroundColor: 'gray',
            marginTop:5,
            marginLeft:3,
            display: 'flex',
            alignItems:'center'
        }}
        >
            <h2>NickName</h2>
            <Button
            sx={{
               marginLeft: "auto",
               backgroundColor: '#dddddd',
               color: '#8b8b8d',
               fontWeight: 'bold',
               ':hover': {
                bgcolor: 'primary.main', 
                color: 'white',
               }
            }}
            >
            수정
            </Button>
        </Box>

  </Box>
  </Container>
  )
}

export default Mypage