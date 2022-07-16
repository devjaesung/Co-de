import React from 'react'
import Box from '@mui/material/Box'
import VideoFeed from './VideoFeed';
import VideoData from './Video.json'
import RecommendBox from './RecommendBox'
import RecommendData from './recommend.json'

const FeedMainpage = () => {
  return (
    <>
    <Box sx={{ background: "#eee", width: '100%', height: '100%', position : 'fixed', zIndex:-999, left:0}}></Box>
        <Box sx={{ background: "#eee",width: "800px", height: "100px", zIndex: 998, position: "fixed", marginLeft: -1}}></Box>
        <Box
        sx={{
            width: "1053px",
            display: "flex"
        }}>
        {/* 오른쪽박스 전체 */}
        <Box
        sx={{
            marginTop: "100px",
            width: "755px"
        }}>
            {/* 필터부분 */}
            <Box
            sx={{ width:"755px",height: "60px",backgroundColor: "#333", color: "#fff", position: 'fixed', zIndex: 997}}>
                필터
            </Box>
            {/* 피드부분 */}
            {VideoData && VideoData.map(data=>{
                return(
                    <VideoFeed title={data.title} key={data.id} content={data.content} nickname={data.nickname} profile={data.profile} video={data.video} tag={data.tag}/>
                )
            })}
        </Box>


        {/* 추천영상박스 시작*/}
        <Box
        sx={{
            backgroundColor: "#fff",
            width: "274px",
            height: "885px",
            marginTop:"100px",
            marginLeft: "775px",
            border: "1px solid #dedede",
            boxShadow: "3px 3px 3px #ededed",
            position: "fixed"
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
    </>        
  )
}

export default FeedMainpage