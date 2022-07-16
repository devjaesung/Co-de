import React from 'react'
import { Box, FormGroup, Input, TextareaAutosize } from '@mui/material';

const TalkForm = () => {
  return (
    <form>
      <Box className="d-basebox">
        <FormGroup sx={{px:"10px"}}>
          <Input type="text" placeholder="제목을 입력하세요" sx={{my:"10px"}} />
          <TextareaAutosize placeholder="내용을 입력하세요" 
            style={{border:"none",
                    borderRadius:"5px",
                    height:"200px",
                    padding:"10px"}} />
        </FormGroup>
      </Box>
    </form>
  )
}

export default TalkForm