import React from 'react'
import { Container, Grid, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TalkDetail1 from './talkdetailin/TalkDetail1';
import TalkDetail2 from './talkdetailin/TalkDetail2';

const TalkIn = () => {
  return (
    <>
      <Container sx={{width:"1083px", mt:"55px"}}>
        <Grid sx={{mx:"-24px", pt:"30px"}}>
          <IconButton aria-label="go back">
            <ArrowBackIcon />
          </IconButton>
        </Grid>
        <Grid container spacing={2} sx={{width:"1083px", mx:"-24px", mt:"0"}}>
          <Grid item sx={{width:"789px", mr:"20px", background:"#fff", p:"20px"}}>
            <TalkDetail1 />
          </Grid>
          <Grid item 
            sx={{width:"274px", background:"#fff", p:"20px", boxShadow:"2px 2px 2px rgba(0, 0, 0, .3)"}} 
            style={{position:"fixed", right:"400px"}}>
            <TalkDetail2  />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default TalkIn