import React from 'react'
import Box from '@mui/material/Box'
import RecommendBox from './RecommendBox'
import RecommendData from './recommend.json'
import YouTube from 'react-youtube'
import { Typography } from '@mui/material'

const FeedMainpage = () => {
  return (
    <Box
    sx={{
        marginTop: "100px",
        width: "1053px",
        display: "flex"
    }}>
    {/* 오른쪽박스 전체 */}
    <Box
    sx={{
        width: "755px",
        height: "1000px",
        backgroundColor: "#eee"
    }}>
        {/* 필터부분 */}
        <Box
        sx={{ height: "60px", backgroundColor: "#333", color: "#fff"}}>
            필터
        </Box>
        {/* 피드부분 */}
        <Box sx={{ background: "#898", height: "500px", boxShadow: "3px 3px 3px #ededed"}}>
            <Box sx={{ height : "350px"}}>
            <YouTube 
                videoId='BPqhBrfWAg0'
                opts={{
                    width: "755px",
                    height: "350px",
                    playerVars: {
                        autoplay: 1, //자동재생 O
                        rel: 1, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                        modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                    },
                }}
                //이벤트 리스너 
                onEnd={(e)=>{e.target.stopVideo(0);}}/>
            </Box>
            <Box sx={{height: "35px", background: "#eee", display: "flex", alignItems:"center"}}>
                <Typography sx={{fontWeight:"bold", fontSize:"16px"}}>[4K] 루카스 그레이엄 (Lukas Graham) - Love Someone (Live In Seoul, 2019)</Typography>
            </Box>
        </Box>
    </Box>


    {/* 추천영상박스 시작*/}
    <Box
    sx={{
        backgroundColor: "#fff",
        width: "274px",
        height: "885px",
        marginLeft: "20px",
        border: "1px solid #dedede",
        boxShadow: "3px 3px 3px #ededed"
    }}>
        <Box
        sx={{
            width: "210px",
            height: "28px",
            marginBottom:"25px",
            marginLeft: "15px",
            borderBottom: "1px solid #999999",
            color: "#6667aa"
        }}>
            <h4>추천영상</h4>
        </Box>
        {RecommendData && RecommendData.map(data=>{
            return(
                <RecommendBox title={data.title} key={data.id} image={data.image} hits={data.hits} nickname={data.nickname} profile={data.profile}/>
            )
        })}
    </Box>
    </Box>

  )
}

export default FeedMainpage