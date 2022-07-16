import React ,{useState}from 'react'
import { Container,Box, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Avatar from '@mui/material/Avatar';
import YouTube from 'react-youtube';
import CommentRight from './CommentRight';
import Data from './data.json'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CommentBox from './CommentBox';
import CommentTest from './CommentTest';
const Commentpage = () => {

  const [btn, setBtn] = useState(true);
  const [numBtn,setNumBtn] = useState(13);
  const [chatCount,setchatCount] = useState(250);

  function onClick(){
      setBtn((current)=>!btn)
  }

  return (
    <Container fixed>
         
        <Box
            sx={{
                width:'1085px',
                height:'800px',
                marginTop:'130px',
                padding:'0px'
            }}>
              <ArrowBackIcon  sx={{color:'#dddddd', fontSize:'32px', marginLeft:'5px',height:'30px',cursor:'pointer'
                              ,':hover': {
                                color: 'black',
                                textDecoration:'none'
                              }}}/> 
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
                        <Box sx={{width:698,display:'flex', paddingRight:'100px'}}>
                            <Typography sx={{marginLeft:3 ,fontSize:'14px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry It was popularised in the 1960s with the release of Letraset sheets containingLorem Ipsum is simply dummy text of the printing and typesetting industry It was popularised in the 1960s with the release of Letraset sheets containing</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{color:"gray",fontSize:'12px'}}>#노래추천 #팝송</Typography>
                            <Box sx={{diplay:'flex' ,borderBottom:'1px solid #888888', width:'798px'}}>
                            <Typography sx={{marginTop:'5px', display:'flex',flexWrap:'nowrap'}}>
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
                                  <ChatBubbleOutlineIcon sx={{ fontSize : '20px', marginLeft: 2, marginTop: 0.5}}/>
                                <Typography sx={{
                                    fontSize: '14px',
                                    fontWeight:'bold',
                                    marginLeft: 0.5,
                                    marginTop: 0.5
                                }}>{chatCount}</Typography>
                            </Typography>
                        </Box>
                        {/* 댓글창 */}
                                <CommentTest/>
                    </Box>
                        
                </Box>
                {/* 박스 오른쪽 */}
                <Box
                   sx={{
                    backgroundColor: "#fff",
                    width: "274px",
                    marginLeft: "20px",
                    border: "1px solid #dedede",
                    boxShadow: "3px 3px 3px #ededed"
                    }}>
                    <Box
                      sx={{
                      width: "210px",
                      color: "#6667aa"
                      }}>
                    </Box>
                      {Data && Data.map(data=>{
                      return(
                      <CommentRight title={data.title} key={data.id} image={data.image} hits={data.hits} nickname={data.nickname} profile={data.profile}/>
                      )
                      })}
                    </Box>
              </Box>
        </Box>
    </Container>
  )
}

export default Commentpage

