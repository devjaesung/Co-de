import React from 'react'
import { Grid, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';

export default function WriteHeader() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <IconButton aria-label="go back"
          sx={{color:"#6667AB", marginLeft:"30px"}}>
          <ArrowBackIcon />
        </IconButton>
      </Grid>
      <Grid item xs={6}>
        <IconButton aria-label="send data"
          sx={{color:"#6667AB", float:"right", marginRight:"30px"}}>
          <SendIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}
