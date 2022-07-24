import {React,useState} from 'react'
import { AppBar, IconButton,Toolbar,Menu, MenuItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {Link} from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login';

const TopBar = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed">
  <Toolbar variant="dense" 
  sx={{
    background:"linear-gradient(180deg, #6667AB 0%, #9F8AA6 100%);",
    justifyContent: "space-between"
    }}>
    <Link to="/"><img src="images/test.svg" alt="logo" /></Link>
    <div style={{display:"flex"}}>
    <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{mr:2}}
      >
            <AddCircleOutlineIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Link to="/Writepage"><MenuItem onClick={handleClose}>피드 올리기</MenuItem></Link>
        <Link to="/Writetalk"><MenuItem onClick={handleClose}>Talk 올리기</MenuItem></Link>
      </Menu>
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <SearchIcon />
    </IconButton>
    <Link to="/Mypage"><IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <PersonIcon />
    </IconButton></Link>
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <SettingsIcon />
    </IconButton>
    <Link to="/Loginpage">
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      <LoginIcon/>  
    </IconButton>
    </Link>
    </div>
  </Toolbar>
</AppBar>
  )
}

export default TopBar