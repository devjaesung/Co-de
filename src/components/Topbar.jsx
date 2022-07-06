import React from 'react'
import { AppBar, IconButton,Toolbar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

const TopBar = () => {
  return (
    <AppBar position="fixed">
  <Toolbar variant="dense" 
  sx={{
    background:"linear-gradient(180deg, #6667AB 0%, #9F8AA6 100%);",
    justifyContent: "space-between"
    }}>
    <a href="#!"><img src="images/test.svg" alt="logo" /></a>
    <div>
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <SearchIcon />
    </IconButton>
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <PersonIcon />
    </IconButton>
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <SettingsIcon />
    </IconButton>
    </div>
  </Toolbar>
</AppBar>
  )
}

export default TopBar