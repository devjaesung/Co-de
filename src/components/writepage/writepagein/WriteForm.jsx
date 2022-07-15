import React, { useState } from 'react'
import { Box, FormGroup, FormLabel, Input, Divider, Button, TextareaAutosize } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import GenreList from '../writepagein2/GenreList';
import TagsList from '../writepagein2/TagsList';
import data from '../db/data.json';

const WriteForm = () => {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDo("");
    setToDos(currentArray => [toDo, ...currentArray]);
  }
  console.log(toDos);
  // const textChange = (e) => {
  //   e.preventDefault();
  //   setTextIn(e.target.value);
  // };
  // const ti = textIn;
  // console.log(ti);

  // const addClick = (e) => {
  //   e.preventDefault();
  //   const addSpace = document.getElementById('addSpace');
  //   const newSpan = document.createElement('span');
  //   newSpan.innerHTML = 
  //     "<label id='tagWrap'><input type='checkbox' id='tagCheck' value><span id='tagName'>태그</span></label>";
  //   addSpace.appendChild(newSpan);
  // };

  return (
    <form action="/post">
      <Box className="d-basebox">
        <FormGroup>
          <FormLabel htmlFor="file_upload" sx={{margin:"0 auto"}}>
            <AddIcon 
              sx={{verticalAlign:"middle"}} />
            <Input type="file" id="file_upload" 
              sx={{px:"5px",
                   ml:"10px"}} />
          </FormLabel>
        </FormGroup>
      </Box>
      <Box className="d-basebox">
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

        <Divider># 태그</Divider>
        <Box id="addbox" sx={{pt:"10px", px:"10px"}}>
          <form onSubmit={onSubmit}>
          <Input type="text" placeholder="태그를 추가해보세요" id="addinput" onChange={onChange} value={toDo} />
          <Button type="submit" variant="contained"
            sx={{height:"30px",
                 pt:"10px",
                 ml:"10px",
                 background:"#6667AB"}}>추가
          </Button>
          </form>
          {
            toDos.map((item, index) => (
              <span key={index}>
              <label id="tagWrap">
                <input type="checkbox" id="tagCheck" value={item} />
                <span id="tagName">{item}</span>  
              </label>
              </span>
            ))
          }
        </Box>
        <FormGroup row sx={{p:"10px"}} id="addSpace">
          {
            data.tags.map(td => (
              <TagsList key={td.id}
              category={td.category} />
            ))
          }

        </FormGroup>
      </Box>
      <Box className="d-basebox">
        <Divider>글내용</Divider>
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

export default WriteForm