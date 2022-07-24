import React from 'react'
import { Container, Grid, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TalkLeft from './talkdetailin/TalkLeft';
import TalkRight from './talkdetailin/TalkRight';
import { useNavigate } from 'react-router-dom';

const Talkpage = () => {
  let navigate = useNavigate();
  return (
    <Container 
      sx={{width:"1083px",
           marginTop:"55px"}}>
      <Grid sx={{mx:"-24px", mb:"15px", pt:"30px"}}>
        <IconButton aria-label="go back" onClick={()=>{ navigate(-1) }}>
          <ArrowBackIcon />
        </IconButton>
      </Grid>
      <Grid container spacing={2}
        sx={{width:"1083px", mx:"-24px"}}>
        <TalkLeft />
        <TalkRight space="1230px"/>
      </Grid>
    </Container>
  )
}

export default Talkpage