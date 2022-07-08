import React from 'react'
import { Divider, FormGroup, Button } from '@mui/material';
import data from '../db/data.json';

const SongTag = () => {
  const addClick = (e) => {
    e.preventDefault();
    const addSpace = document.getElementById('addSpace');
    const newSpan = document.createElement('span');
    newSpan.innerHTML = "<label id='tagWrap'><input type='checkbox' id='tagCheck' name='tags' value><span id='tagName'>블루</span></label>";
    addSpace.appendChild(newSpan);
  }
  return (
    <>
      <Divider># 태그</Divider>
      <FormGroup row sx={{p:"10px 30px"}}>  
        <div id="addForm" style={{padding:"10px 0"}}>
          <input type="text" placeholder="태그를 추가해보세요" id="addInput" />
          <Button variant="contained" id="addbtn" onClick={addClick} sx={{background:"#6667AB", py:"3px", ml:"5px"}}>추가</Button>
        </div>
        <div id="addSpace" style={{width:"auto", whiteSpace:"wrap", border:"none"}}>
        {
          data.thema.map((td) => (
            <span key={td.id}>
              <label id="tagWrap">
                <input type="checkbox" id="tagCheck" name="tags" value="{td.category}" />
                <span id="tagName">{td.category}</span>
              </label>
            </span>
          ))
        }
        </div>
      </FormGroup>
    </>
  )
}

export default SongTag