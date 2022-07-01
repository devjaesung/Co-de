import React from 'react'
import { Box, FormGroup, FormLabel, Input, FormControlLabel, Checkbox, Divider, FormHelperText, TextareaAutosize } from '@mui/material'
import { Add } from '@mui/icons-material';
import './writeform.css';

const WriteForm = () => {
  const handleUserInfo = (e) => {
    let inputs = e.target.value;
    console.log(inputs);
  }
  return (
    <form action="/post">
      <Box className="d-basicbox">
        <FormGroup>
          <FormLabel for="file_upload" sx={{textAlign:"center"}}>
            <Add sx={{color:"#777", display:"block", margin:"0 auto"}}/>
            <Input type="file" id="file_upload" sx={{border:"none", padding:"0 auto"}} onChange={handleUserInfo} />
          </FormLabel>
        </FormGroup>
      </Box>
      <Box className="d-basicbox">
        <Divider flexItem>곡정보</Divider>    
        <FormGroup row sx={{p:"30px", width:"100%"}}>
          <Input type="text" placeholder="노래제목" name="songTitle" sx={{width:"49%", mr:"10px"}} onChange={handleUserInfo} />
          <Input type="text" placeholder="가수명" name="songArtist" sx={{width:"49%"}} onChange={handleUserInfo} />
        </FormGroup>

        <Divider flexItem>장르</Divider>    
        <FormGroup row sx={{p:"30px"}}>
          <FormControlLabel control={<Checkbox />} label="발라드" />
          <FormControlLabel control={<Checkbox />} label="댄스"/>
          <FormControlLabel control={<Checkbox />} label="랩/힙합"/>
          <FormControlLabel control={<Checkbox />} label="R&B/Soul"/>
          <FormControlLabel control={<Checkbox />} label="인디음악"/>
          <FormControlLabel control={<Checkbox />} label="록/메탈"/>
          <FormControlLabel control={<Checkbox />} label="트로트"/>
          <FormControlLabel control={<Checkbox />} label="포크/블루스"/>
          <FormControlLabel control={<Checkbox />} label="OST"/>
          <FormControlLabel control={<Checkbox />} label="클래식"/>
          <FormControlLabel control={<Checkbox />} label="POP"/>
        </FormGroup>  

        <Divider flexItem># 태그</Divider>
        <FormHelperText>
          복수 응답 가능! 더 많은 태그들을 추가해보세요!
        </FormHelperText>
        <FormGroup row sx={{p:"30px"}}>
          <FormControlLabel control={<Checkbox />} label="신나는" />
          <FormControlLabel control={<Checkbox />} label="차분한"/>
          <FormControlLabel control={<Checkbox />} label="드라이브"/>
          <FormControlLabel control={<Checkbox />} label="이별"/>
          <FormControlLabel control={<Checkbox />} label="봄"/>
          <FormControlLabel control={<Checkbox />} label="기타"/>
        </FormGroup>
      </Box>
      <Box className="d-basicbox">
        <Divider flexItem>글 내용</Divider>
        <FormGroup sx={{p:"30px"}}>
          <Input type="text" placeholder="제목" sx={{width:"100%", mb:"10px"}} />
          <TextareaAutosize aria-label="empty textarea" placeholder="내용을 입력하세요." 
            style={{width:"100%", 
                    height:"150px",
                    border:"1px solid #ededed",
                    borderRadius:"8px",
                    padding:"10px"}} />
        </FormGroup>
      </Box>
    </form>
  )
}

export default WriteForm