import React from 'react'
import { Container, Divider } from '@mui/material';
import WriteHeader from './writepagein/WriteHeader';
import WriteForm from './writepagein/WriteForm';


const Writepage = () => {
  return (
    <Container
      sx={{background:"#fff",
           marginTop:"55px",
           padding:"30px 0"}}>
      <WriteHeader />
      <Divider sx={{border:"1px solid rgba(0, 0, 0, 0.12)"}} />
      <WriteForm />
    </Container>
  )
}

export default Writepage