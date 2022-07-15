import React from 'react'
import { Container, Divider } from '@mui/material';
import Header from './writepagein/Header';
import WriteForm from './writepagein/WriteForm';

const Writepage = () => {
  return (
    <Container maxWidth="md" 
      sx={{background:"#fff",
           marginTop:"55px",
           padding:"30px 0"}}>
      <Header />
      <Divider sx={{border:"1px solid #ddd"}} />
      <WriteForm />
    </Container>
  )
}

export default Writepage