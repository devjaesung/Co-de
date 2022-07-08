import React from 'react'
import { Grid, IconButton, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './talk.css';

const TalkIn = () => {
  return (
    <>
      <Grid sx={{mt:"55px", pt:"30px"}}>
        <IconButton aria-label="go back">
          <ArrowBackIcon />
        </IconButton>
      </Grid>
      <Grid container>
        <Grid item xs={9}>
          <Box sx={{background:"#fff", mr:"20px", p:"15px 20px"}}>
            <Grid sx={{display:"flex", justifyContent:"space-between"}}>
              <Box>
                <img src="/images/profile.jpg" className="d-profile" alt="프로필사진" />
                <span className="d-profilename">Nick Name</span>
              </Box>
              <Box>
                <IconButton>
                  <MoreHorizIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid>ddfdf</Grid>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{background:"#fff"}}>
            dsfdsfsd
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default TalkIn

{/* <Box sx={{background:"#fff", display:"flex", justifyContent:"space-between"}}>
<Grid>
  <Box></Box>
  <Box></Box>
</Grid>
</Box> */}