import React from 'react'
import { Box, FormGroup, Input, TextareaAutosize } from '@mui/material';
import TalkTags from '../writepagein2/TalkTags';

const TalkForm = () => {
  return (
    <>
      <Box className="d-basebox">
        <TalkTags />
      </Box>
      <Box className="d-basebox">
        <form>
          <FormGroup sx={{px:"10px"}}>
            <Input type="text" placeholder="제목을 입력하세요" sx={{my:"10px"}} />
            <TextareaAutosize placeholder="내용을 입력하세요" 
              style={{border:"none",
                      borderRadius:"5px",
                      height:"200px",
                      padding:"10px"}} />
          </FormGroup>
        </form>
      </Box>
    </>
  )
}

export default TalkForm