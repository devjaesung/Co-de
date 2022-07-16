import React from 'react'
import { Grid, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';

const Header = () => {
  return (
    <Grid container 
      sx={{justifyContent:"space-between"}}>
      <Grid item>
        <IconButton aria-label="go back" sx={{color:"#6667AB"}}>
          <ArrowBackIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton aria-label="send data" sx={{color:"#6667AB"}}>
          <SendIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default Header