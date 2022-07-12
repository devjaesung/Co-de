import React from 'react'
import { Container, Grid, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TalkDetail1 from './talkdetailin/TalkDetail1';

const TalkIn = () => {
  return (
    <>
      <Container sx={{width:"1083px", mt:"55px"}}>
        <Grid sx={{mx:"-24px", pt:"30px"}}>
          <IconButton aria-label="go back">
            <ArrowBackIcon />
          </IconButton>
        </Grid>
        <TalkDetail1 />
      </Container>
    </>
  )
}

export default TalkIn