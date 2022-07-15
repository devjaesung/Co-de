import React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';


const RecommendBox = (props) => {
  return (
    <Box
        sx={{
            height: "200px",
            marginBottom: "2.5px"
        }}>
            <Box
            sx={{
                height: "140px"
            }}>
                <img src={props.image} alt="singer01" width={274} height={140}/>
            </Box>
            <Box
            sx={{
                marginTop: "-22px",
                marginLeft: "3px",
                height: "20px",
                textOverflow : "ellipsis",
                whiteSpace: 'nowrap'
            }}>
            <h5>{props.title}</h5>
            </Box>
            <Box
            sx={{
                height: "20px",
                fontSize: "11px",
                marginTop:"-10px",
                marginLeft: "3px",
                color: "#999"
            }}>
                <p>조회수 : {props.hits}</p>
            </Box>
            <Box
            sx={{
                height: "20px",
                display: "flex",
                justifyContent:"flex-end"
            }}>
            <Typography sx={{marginRight:"6px", fontSize:"13px", fontWeight:"bold", color: "#333"}}>{props.nickname}</Typography> 
            <Avatar alt="Avatar" src={props.profile} sx={{ width: 19, height: 19, border: "1px solid #666" }}/>
            </Box>
        </Box>
  )
}

export default RecommendBox