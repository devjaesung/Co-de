import React from 'react'
import { Divider, FormGroup } from '@mui/material';
import data from '../db/data.json';

const SongTag = () => {
  const clickAdd = (e) => {
    const addSpace = document.getElementById('addSpace');
    const newSpan = document.createElement('span');
    newSpan.innderHTML = "<input type='checkbox' id='tagCheck' name='color' value='태그' /><span id='tagName'>태그</span>";
    addSpace.appendChil(newSpan);
  }
  return (
    <>
      <Divider># 태그</Divider>
      <FormGroup row sx={{p:"10px 30px"}}>  
        {
          data.thema.map((td) => (
            <div key={td.id}>
              <label className="tagWrap">
                <input type="checkbox" id="tagCheck" name="color" value="{td.category}" />
                <span id="tagName">{td.category}</span>
              </label>
            </div>
          ))
        }
        <div id="addSpace"></div>
        <div className="addbox">
          <input type="text" id="addinput" placeholder="태그 추가하기" />
          <button id="addIcon" onClick={clickAdd}>추가</button>
        </div>
      </FormGroup>
    </>
  )
}

export default SongTag