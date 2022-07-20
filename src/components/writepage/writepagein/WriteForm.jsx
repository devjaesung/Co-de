import React from 'react'
import { Box, FormGroup, FormLabel, Input, Divider, TextareaAutosize } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import GenreList from '../writepagein2/GenreList';
import Tags from '../writepagein2/Tags'
import data from '../db/data.json';

const WriteForm = () => {


  return (
    <>
      <Box className="d-basebox">
        <form>
        <FormGroup>
          <FormLabel htmlFor="file_upload" sx={{margin:"0 auto"}}>
            <AddIcon 
              sx={{verticalAlign:"middle"}} />
            <Input type="file" id="file_upload" 
              sx={{px:"5px",
                   ml:"10px"}} />
          </FormLabel>
        </FormGroup>
        </form>
      </Box>
      <Box className="d-basebox">
        <form>
        <Divider>곡정보</Divider>
        <FormGroup row sx={{p:"10px"}}>
          <Input type="text" placeholder="노래 제목을 입력하세요" 
            sx={{width:"49%", mr:"10px"}} />
          <Input type="text" placeholder="가수을 입력하세요"
            sx={{width:"49%"}} />
        </FormGroup>

        <Divider>장르</Divider>
        <FormGroup row sx={{p:"10px"}}>
          {
            data.genre.map(gd => (
              <GenreList 
                key={gd.id}
                category={gd.category} />
            ))
          }
        </FormGroup>
        </form>
        <Tags />
      </Box>
      <Box className="d-basebox">
        <form>
        <Divider>글내용</Divider>
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

export default WriteForm