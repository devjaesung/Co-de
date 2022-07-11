import React from 'react'
import { Container,Box, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Avatar from '@mui/material/Avatar';
import YouTube from 'react-youtube';

const Commentpage = () => {
  return (
    <Container fixed>
         
        <Box
            sx={{
                width:'1085px',
                height:'800px',
                marginTop:'130px',
                padding:'0px'
            }}>
              <ArrowBackIcon  sx={{color:'#dddddd', fontSize:'32px', marginLeft:'5px',height:'30px'}}/> 
                <Box 
                sx={{display:'flex'}}>
                {/* 박스 왼쪽 */}
                <Box sx={{display:'flex', flexWrap:'wrap'}}>
                        <Box  sx={{width:798,height:50,display:'flex',flexDirection:'nowrap', alignItems:'center',bgcolor:'#ffffff'}}>
                            <Typography sx={{fontSize:'26px',fontWeight:'bold', paddingLeft:'30px'}}>Rolling in the Deep - Adele Cover.</Typography>
                            <Typography sx={{fontSize:'8px', color:'#001010', fontWeight:'400', paddingLeft:'5px'}}>2일전</Typography>
                            <Box sx={{marginLeft:'203px',flexDirection:'nowrap',display:'flex'}}>
                            <Avatar alt="Avatar" src="images/profile.jpg" sx={{ width: 25, height: 25, border: "1px solid #666" }}/>
                            <Typography sx={{fontSize:'16px', fontWeight:'bold', paddingLeft:'5px'}}>NickName</Typography>
                            </Box>
                        </Box>
                        <Box sx={{display:'flex',}}>
                                <YouTube 
                                videoId='rYEDA3JcQqw'          
                                opts={{
                                width: "798",
                                height: "480",
                                playerVars: {
                                  autoplay: 1, //자동재생 O
                                  rel: 8, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                                  modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                                  playsinline:1
                                  
                                },
                                 }}
                                //이벤트 리스너 
                                onEnd={(e)=>{e.target.stopVideo(0);}}/>
                        </Box>
                        <Box sx={{width:798,display:'flex'}}>
                            <Typography sx={{marginLeft:3}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                        </Box>
                        <Box sx-={{display:'flex'}}>
                            <Typography>#노래추천</Typography>
                        </Box>
                </Box>
                {/* 박스 오른쪽 */}
                <Box
                    sx={{width:265, paddingLeft:'20px'}}>
                        <h2>Hello2</h2>
                </Box>
                </Box>
        </Box>
    </Container>
  )
}

export default Commentpage

