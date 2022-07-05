import React, { useState } from 'react'
import { Box, FormGroup, Input, TextareaAutosize, Button } from '@mui/material';
import './writeform.css';
import data from '../db/data.json';

const TalkForm = () => {
  const [bgChange, setBgChange] = useState('#fff');
  const [txChange, setTxChange] = useState('#333');
  const talkClick = (e) => {
    setBgChange(bgChange === '#fff' ? '#6667AB' : '#fff');
    setTxChange(txChange === '#333' ? '#fff' : '#333');
  }
  return (
    <form action="/post">
      {/* 노래추천 노래찾기 노래고민 그냥 이야기 */}
      <Box className="d-basicbox">
        <div className="talkcategory">
          {
            data.talks.map((td) => (
              <Button style={{backgroundColor:bgChange, color:txChange}}
                sx={{marginRight:"15px",
                     color:"#333",
                     fontSize:"15px",
                     fontWeight:"bold",
                     width:"100px",
                     borderRadius:"20px",
                     padding:"5px 8px 3px"}} onClick={talkClick}>{td.category}
              </Button>
            ))
          }
        </div>
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
