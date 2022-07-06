import React from 'react'
import { Box, FormGroup, FormLabel, Input, Divider, FormControlLabel, Checkbox, TextareaAutosize } from '@mui/material';
import { Add } from '@mui/icons-material';
import SongTag from './SongTag';
import './writeform.css';
import data from '../db/data.json';

const WriteForm = () => {
  return (
    <form action="/post">
      <Box className="d-basicbox">
        <FormGroup>
          <FormLabel htmlFor="file_upload">
            <Add sx={{display:"block", margin:"0 auto"}} />
            <Input type="file" id="file_upload" 
              sx={{display:"block", width:"300px", margin:"0 auto", padding:"5px 15px"}} />
          </FormLabel>
        </FormGroup>
      </Box>
      <Box className="d-basicbox">
        <Divider>곡정보</Divider>
        <FormGroup row sx={{p:"10px 30px 15px", width:"100%", justifyContent:"space-between"}}>
          <Input type="text" id="songname" placeholder="노래제목" sx={{width:"49%"}} />
          <Input type="text" id="artistname" placeholder="가수명" sx={{width:"49%"}} />
        </FormGroup>
        <Divider>장르</Divider>
        <FormGroup row sx={{p:"10px 30px 15px"}}>
          {
            data.genre.map((gd) => (
              <div key={gd.id}>
                <label className="tagWrap">
                  <input type="checkbox" id="tagCheck" name="color" value="{gd.category}" />
                  <span id="tagName">{gd.category}</span>
                </label>
              </div>
            ))
          }
        </FormGroup>
        <SongTag />
      </Box>
      <Box className="d-basicbox">
        <Divider>글 내용</Divider>
        <FormGroup sx={{p:"10px 30px 15px"}}>
          <Input type="text" placeholder="제목을 입력하세요."
            sx={{display:"block", mb:"15px"}} />
          <TextareaAutosize placeholder="내용을 입력하세요."
            style={{padding:"15px", border:"none", borderRadius:"10px", height:"250px"}} />
        </FormGroup>
      </Box>
    </form>
  )
}

export default WriteForm