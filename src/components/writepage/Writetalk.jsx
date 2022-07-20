import React from 'react'
import { Container, Divider } from '@mui/material';
import Topbar from '../Topbar';
import Header from './writepagein/Header';
import TalkForm from './writepagein/TalkForm';

const Writetalk = () => {
  return (
    <Container maxWidth="md" 
      sx={{background:"#fff",
           marginTop:"55px",
           padding:"30px 0"}}>
      <Topbar />
      <Header />
      <Divider />
      <TalkForm />
    </Container>
  )
}

export default Writetalk