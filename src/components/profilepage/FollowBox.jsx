import {React, useState} from 'react'
import { Box, Button, Container, Typography, Divider } from '@mui/material'


const FollowBox = () => {
  const [followBtn,setFollowBtn] = useState(true);
  const [numOfFollow,setNumOfFollow] = useState(211);
  const [intro,setIntro] = useState("안녕하세요. 음악으로 소통하는 앱 Co:de입니다.");

  const Invert = () =>{
        setFollowBtn((current)=>!followBtn)
    }
  return (
    <Container sx={{width: "270px",height: "550px", backgroundColor: "#fff",boxShadow: '0 7px 9px -7px gray', margin: 0}}>
      <Button variant={followBtn? 'contained' : 'outlined'} onClick={Invert} color="secondary" 
        sx={{marginTop: 1, marginLeft: 16}}>
        {followBtn? "Follow" : "Followed"}
      </Button>
      <Divider sx={{marginTop: 2}}/>
      <Box sx={{display: "flex", aligntItmes: "center",marginTop:1, marginLeft: 14}}>
        <Typography variant='body2' component='p' sx={{display:'flex',flexFlow: 'column',alignItems: 'center'}}>
            <span style={{color:'#999'}}>follow</span>
            {followBtn? numOfFollow : numOfFollow + 1 }
        </Typography>
        <Typography variant='body2' component='p' marginLeft={1} sx={{display:'flex',flexFlow: 'column',alignItems: 'center'}}>
        <span style={{color:'#999'}}>following</span>
         127
        </Typography>
        </Box>
        <Box sx={{marginTop: 2}}>
        <Typography variant='body2' component='p' sx={{fontWeight: "bold"}}>
          소개글({intro.length}/50자)
        </Typography>
        <Typography variant='body2' component='p' sx={{color:"#666", marginTop: 2}}>
          "{intro}"
        </Typography>
            <Divider sx={{marginTop: 7}}/>
        <Typography variant='body2' component='p' sx={{fontWeight: "bold", marginTop: 2}}>
          좋아하는 아티스트
        </Typography>
        <Typography variant='body2' component='p' sx={{color:"#666", marginTop: 2}}>
          #coldplay #IU #데이먼스이어 #백예린
        </Typography>
        <Divider sx={{marginTop: 3}}/>
        <Typography variant='body2' component='p' sx={{fontWeight: "bold", marginTop: 2}}>
          좋아하는 노래
        </Typography>
        <Typography variant='body2' component='p' sx={{color:"#666", marginTop: 2}}>
          #밤편지 #0310 #Antifreeze
        </Typography>
        </Box>
      
   
    
    </Container>
  )
}

export default FollowBox