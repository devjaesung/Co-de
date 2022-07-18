import React,{useState} from 'react'
import { Box, Avatar, Typography, Divider, IconButton, Menu, MenuItem, Container } from '@mui/material'
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ArticleIcon from '@mui/icons-material/Article';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SlideshowTwoToneIcon from '@mui/icons-material/SlideshowTwoTone';
import { Link } from 'react-router-dom';

const SwitchBox = () => {

    const [active,setActive] = useState(false)
    const SwitchVideo = () =>{
        setActive(true)
    }
    const SwitchTalk = () =>{
        setActive(false)
    }

  return (
    <Box sx={{ width:"100px",zIndex:"999",position:'fixed',top:"120px",left:"80px",display:"flex"}}>
        <Link to='/' onClick={SwitchTalk}><IconButton>
            {active? <SlideshowIcon/>:<SlideshowTwoToneIcon color="secondary"/>}
        </IconButton>
        </Link>
        <Divider orientation="vertical" flexItem/>
        <Link to='/TalkMain' onClick={SwitchVideo}><IconButton>
        {active? <ArticleIcon color='secondary'/>:<ArticleOutlinedIcon/>}
        </IconButton>
        </Link>
    </Box>
  )
}

export default SwitchBox