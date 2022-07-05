import React from 'react'
import { Box, FormGroup, Input, TextareaAutosize } from '@mui/material';
import './writeform.css';

const TalkForm = () => {
  return (
    <form action="/post">
      <Box className="d-basicbox">
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

export default TalkForm
