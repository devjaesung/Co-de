import React from 'react'
import { Grid, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <Grid container 
      sx={{justifyContent:"space-between"}}>
      <Grid item>
        <Link to="/">
        <IconButton aria-label="go back" sx={{color:"#6667AB"}}>
          <ArrowBackIcon />
        </IconButton>
        </Link>
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