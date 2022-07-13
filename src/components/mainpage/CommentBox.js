import React, { Component } from 'react'
import { Box,Button,Container,TextField } from '@mui/material'

import styled from "styled-components";

const WhiteBorder = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;
export class CommentBox extends Component {
    constructor(){
        super()
        this.state={
            content:"",
            posting:[]
        }
    }
    content=(e)=>{
        this.setState({content:e.target.value})
        console.log(this.state.content)
    }
    posting=(e)=>{
        this.state.posting.push({text:this.state.content})  
        this.setState({content:""})
        console.log(this.state.posting)  
    }
  render() {
    return (
      <div>
        <WhiteBorder
            placeholder="댓글을 입력해주세요"
            onChange={this.content}/>

        <Button
        onClick={this.posting}>
            게시
        </Button>
        {this.state.posting.map(e=>{
            return <li>{e.text}</li>
        })}
      </div>
    )
  }
}

export default CommentBox