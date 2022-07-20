import React, { useState } from 'react'
import { Box, Input, Button, Divider, FormGroup } from '@mui/material';
import TagsList from './TagsList';
import data from '../db/data.json';

const Tags = () => {
  const [tagText, setTagText] = useState('');
  const [tagsArray, setTagsArray] = useState([]);
  
  const onChange = (e) => {
    setTagText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setTagText('');
    setTagsArray(currentArray => [tagText, ...currentArray]);
  };
  return (
    <>
      <Divider># 태그</Divider>
      <Box id="addbox" sx={{pt:"10px", px:"10px"}}>
        <form onSubmit={onSubmit}>
          <Input type="text" placeholder="태그를 추가해보세요" onChange={onChange} value={tagText} />
          <Button type="submit" variant="contained"
            sx={{height:"30px",
                 pt:"10px",
                 ml:"10px",
                 background:"#6667AB"}}>추가
          </Button>
        </form>
      </Box>
      <FormGroup row sx={{p:"10px"}}>
        {
          data.tags.map(td => (
            <TagsList 
              key={td.id} 
              category={td.category} />
          ))
        }
        {
          tagsArray.map((item, index) => (
            <span key={index}>
              <label id="tagWrap">
                <input type="checkbox" id="tagCheck" checked readOnly value="{item}" />
                <span id="tagName">{item}</span>  
              </label>
            </span>
          ))
        }
      </FormGroup>
    </>
  )
}

export default Tags