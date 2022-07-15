import React,{useState} from 'react'
import { Box, Avatar, Typography, Divider, IconButton, Menu, MenuItem, Container } from '@mui/material'
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ArticleIcon from '@mui/icons-material/Article';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SlideshowTwoToneIcon from '@mui/icons-material/SlideshowTwoTone';

const SwitchBox = () => {

    const [active,setActive] = useState(true)
    const SwitchVideo = () =>{
        setActive(true)
    }
    const SwitchTalk = () =>{
        setActive(false)
    }

  return (
    <Box sx={{ width:"100px",zIndex:"999",position:'fixed',top:"120px",left:"120px",display:"flex"}}>
        <IconButton onClick={SwitchTalk}>
            {active? <SlideshowIcon/>:<SlideshowTwoToneIcon color="secondary"/>}
        </IconButton>
        <Divider orientation="vertical" flexItem/>
        <IconButton onClick={SwitchVideo}>
        {active? <ArticleIcon color='secondary'/>:<ArticleOutlinedIcon/>}
        </IconButton>
    </Box>
  )
}

export default SwitchBox