import React from 'react'
import { Box, FormGroup, FormLabel, Input, FormControlLabel, Checkbox, Divider, FormHelperText, TextareaAutosize, Button } from '@mui/material'
import { Add } from '@mui/icons-material';
import data from '../db/data';
import './writeform.css';

const WriteForm = ({td}) => {
  const handleInput = (e) => {
    let inputs = e.target.value;
    console.log(inputs);
  }
  console.log(td);

  return (
    <form action="/post">
      <Box className="d-basicbox">
        <FormGroup>
          <FormLabel htmlFor="file_upload" sx={{textAlign:"center"}}>
            <Add sx={{color:"#777", display:"block", margin:"0 auto"}}/>
            <Input type="file" id="file_upload" sx={{border:"none", padding:"0 auto"}} onChange={handleInput} />
          </FormLabel>
        </FormGroup>
      </Box>
      <Box className="d-basicbox">
        <Divider flexItem>곡정보</Divider>    
        <FormGroup row sx={{p:"10px 30px", width:"100%"}}>
          <Input type="text" placeholder="노래제목" name="songTitle" sx={{width:"49%", mr:"10px"}} onChange={handleInput} />
          <Input type="text" placeholder="가수명" name="songArtist" sx={{width:"49%"}} onChange={handleInput} />
        </FormGroup>

        <Divider flexItem>장르</Divider>  
        <FormGroup row sx={{p:"10px 30px"}}>  
        {
          data.genre.map(gd => (
            <div key={gd.id}>
              <FormControlLabel control={<Checkbox size="small" />} label={gd.category} />
            </div>
          ))
        }
        </FormGroup>

        <Divider flexItem># 태그</Divider>
        <FormHelperText>
          복수 응답 가능! 더 많은 태그들을 추가해보세요!
        </FormHelperText>
        <FormGroup row sx={{p:"10px 30px"}}>
        {
          data.thema.map(td => (
            <div key={td.id}>
              <FormControlLabel control={<Checkbox size="small" />} label={td.category} />
            </div>
          ))
        }
        <Button><Add/></Button>
        </FormGroup>
      </Box>
      <Box className="d-basicbox">
        <Divider flexItem>글 내용</Divider>
        <FormGroup sx={{p:"10px 30px"}}>
          <Input type="text" placeholder="제목" sx={{width:"100%", mb:"10px"}} />
          <TextareaAutosize aria-label="empty textarea" placeholder="내용을 입력하세요." 
            style={{width:"100%", 
                    height:"250px",
                    border:"none",
                    borderRadius:"8px",
                    padding:"10px"}} />
        </FormGroup>
      </Box>
    </form>
  )
}


export default WriteForm