import React from 'react'
import TalkForm from './writepagein/TalkForm';
import WriteHeader from './writepagein/WriteHeader';
import { Container, Divider } from '@mui/material';

const Writetalk = () => {
  return (
    <Container
      sx={{background:"#fff", 
           marginTop:"55px",
           padding:"40px 0"}}>
      <WriteHeader />
      <Divider sx={{border:"1px solid rgba(0, 0, 0, 0.12)"}} />
      <TalkForm />
    </Container>
  )
}

export default Writetalk
