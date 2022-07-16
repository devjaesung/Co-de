import React from 'react'
import { Container, Grid, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TalkLeft from './talkdetailin/TalkLeft';
import TalkRight from './talkdetailin/TalkRight';

const Talkpage = () => {
  return (
    <Container 
      sx={{width:"1083px",
           marginTop:"55px"}}>
      <Grid sx={{mx:"-24px", mb:"15px", pt:"30px"}}>
        <IconButton aria-label="go back">
          <ArrowBackIcon />
        </IconButton>
      </Grid>
      <Grid container spacing={2}
        sx={{width:"1083px", mx:"-24px"}}>
        <TalkLeft />
        <TalkRight />
      </Grid>
    </Container>
  )
}

export default Talkpage