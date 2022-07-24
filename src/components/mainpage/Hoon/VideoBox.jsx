import React from 'react'
import { Box ,Typography} from '@mui/material'
import Avatar from '@mui/material/Avatar';
import YouTube from 'react-youtube';

const VideoBox = props => {
  return (
    <>
    <Box  sx={{width:798,height:50,display:'flex',flexDirection:'nowrap', alignItems:'center',bgcolor:'#ffffff'}}>
                            <Typography sx={{fontSize:'26px',fontWeight:'bold', paddingLeft:'30px'}}>{props.title}</Typography>
                            <Typography sx={{fontSize:'8px', color:'#001010', fontWeight:'400', paddingLeft:'5px'}}>2일전</Typography>
                            <Box sx={{marginLeft:'203px',flexDirection:'nowrap',display:'flex'}}>
                            <Avatar alt="Avatar" src="images/profile.jpg" sx={{ width: 25, height: 25, border: "1px solid #666" }}/>
                            <Typography sx={{fontSize:'16px', fontWeight:'bold', paddingLeft:'5px'}}>NickName</Typography>
                            </Box>
                        </Box>
                        <Box sx={{display:'flex',}}>
                                <YouTube 
                                videoId={props.video}          
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
        </>
  )
}

export default VideoBox