import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import AudioFileIcon from '@mui/icons-material/AudioFile';

const LeftBox = () => {
  return (
   <Box
    sx={{
      width: 370,
      height: 740,
      border: 1,
      borderColor: '#e6e6e6',
      backgroundColor : '#fff',
      marginLeft: 5
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
                bgcolor: '#6667AB', 
                color: 'white',
               }
            }}
            >
            수정1
            </Button>
        </Box>
      <Box
        sx={{
          width: 320,
          height: 40,
          marginLeft:3,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end'
      }}>
          
          <Box
            sx={{
              display:'flex',
              fontSize:'12px',
              fontWeight: 'bold',
              color:'#999999'
            }}>
            팔로워
          </Box>
          <Box
          sx={{
            fontSize: '12px',
            fontWeight: 'bold',
            paddingLeft: '5px'
          }}>
            2995
          </Box>
          <Box
            sx={{
              display:'flex',
              fontSize:'12px',
              fontWeight: 'bold',
              color:'#999999',
              paddingLeft: '15px'
            }}>
            팔로우
          </Box>
          <Box
          sx={{
            fontSize: '12px',
            fontWeight: 'bold',
            paddingLeft: '5px'
          }}>
            456
          </Box>
      </Box>

      <Box
      sx={{
        width: 320,
        height: 165,
        marginLeft:3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
       <AccountCircleIcon
        sx={{
          fontSize: '150px'
        }}
        color="disabled"
        />
      </Box>

      <Box
      sx={{
        width: 320,
        height: 60,
        marginLeft:3,
        display: 'flex',
        justifyContent: 'space-evenly'
      }}>
          <Box
          sx={{
            width: 70,
            height: 20,
            backgroundColor: '#ebebeb',
            borderRadius: '7px',
            textAlign: 'center',
            fontSize: '12px',
            fontWeight : 'bold',
            color: '#a0a0a0'
          }}>
            인디음악
          </Box>
          <Box
          sx={{
            width: 70,
            height: 20,
            backgroundColor: '#ebebeb',
            borderRadius: '7px',
            textAlign: 'center',
            fontSize: '12px',
            fontWeight : 'bold',
            color: '#a0a0a0'
          }}>
            팝송
          </Box>
          <Box
          sx={{
            width: 70,
            height: 20,
            backgroundColor: '#ebebeb',
            borderRadius: '7px',
            textAlign: 'center',
            fontSize: '12px',
            fontWeight : 'bold',
            color: '#a0a0a0'
          }}>
            OST
          </Box>
      </Box>

      <Box
      sx={{
        width: 320,
        height: 110,
        marginLeft: 3,
        borderBottom:1,
        borderColor: '#cacaca',
      }}>
          <Box
          sx={{
            paddingLeft: 1,
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#7a7a7a'
          }}>
            소개글 (15/50자)
          </Box>
          <Box
          sx={{
            height: 60,
            marginTop:2,
            paddingLeft: 1,
            color: '#acacac',
            fontSize: '13px'
          }}>
            안녕하세요. 코드개발자 입니다.
          </Box>
      </Box>
      
      <Box
      sx={{
        width: 320,
        height: 110,
        marginLeft: 3,
        marginTop: 2,
        borderBottom: 1,
        borderColor: '#cacaca'
      }}>
        <Box
          sx={{
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#7a7a7a',
            display: 'flex'
          }}>
            <LoyaltyIcon
            sx={{
              marginRight: 1
            }}>
            </LoyaltyIcon>
            좋아하는 아티스트
          </Box>
          <Box
          sx={{
            height: 60,
            marginTop:2,
            paddingLeft: 1,
            color: '#acacac',
            fontSize: '13px'
          }}>
            # coldplay # IU # 데이먼스이어 # 백예린
          </Box>
      </Box>

      <Box
      sx={{
        width: 320,
        height: 110,
        marginLeft: 3,
        marginTop: 2
      }}>
        <Box
          sx={{
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#7a7a7a',
            display: 'flex'
          }}>
            <AudioFileIcon
            sx={{
              marginRight: 1
            }}>
            </ AudioFileIcon>
            좋아하는 노래
          </Box>
          <Box
          sx={{
            height: 60,
            marginTop:2,
            paddingLeft: 1,
            color: '#acacac',
            fontSize: '13px'
          }}>
            # 밤편지 # 0310 # Antifreeze
          </Box>
      </Box>
  </Box> 
  )
} 

export default LeftBox