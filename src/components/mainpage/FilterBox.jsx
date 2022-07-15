import React, {useState,useEffect} from 'react'
import { Box,IconButton,Button } from '@mui/material'
import Data from '../profilepage/data/talk.json'
import FilterListIcon from '@mui/icons-material/FilterList';
import { More } from '@mui/icons-material';

const FilterBox = () => {

    const Btn = (props) => {
        return(
            <Button variant='contained' size='small' color="secondary" sx={{backgroundColor:"#ccc",margin:'10px',color:'#fff'}}>{props.text}</Button>
        )
    }
    const SBtn =(props) => {
        return(
            <button style={{backgroundColor:"#ddd",border:"none", borderRadius:"5px", minWidth:"42px", height:"20px", color:"#666", margin:"10px",fontSize:'12px'}}>
                {props.text}
            </button>
        )
    }

    const [active,setActive] = useState(false);
    const Invert = () =>{
        setActive((current)=>!active)
    }

    const MoreBox = () => {
        return(
            
            <Box sx={{backgroundColor: "#fff",boxShadow: '7px 7px 15px -7px gray, -4px 0px 10px -5px gray',border:"1px solid #ddd",borderRadius:"5px", width:"400px",height:"80px",position:'fixed', top:"140px",right:"520px",zIndex:"999"}}>
                <SBtn text="#팝송" />
                <SBtn text="#k-pop"/>
                <SBtn text="#밴드모집"/>
                <SBtn text="#음원발매"/>
                <SBtn text="#인디밴드"/>
                <SBtn text="#키보드"/>
                <SBtn text="#악기추천"/>
                <SBtn text="#악보나눔"/>
            </Box>
        )
    }
    //filter

    const onSong = (props) =>{
        Data.filter(content => content.hashtag.includes("노래추천"))
        console.log("it is working!")
    }

  return (
    <Box>
    <span style={{width:'2000px',height:'55px',zIndex:"998",position:'fixed',top:"40px",left:"150px",backgroundColor:"#ddd"}}></span>
    <Box sx={{backgroundColor: "#fff",boxShadow: '0 7px 9px -7px gray', width:"788px",zIndex:"777",position:'fixed',top:'95px'}}>
        <Btn text="All"/>
        <Btn text="#노래추천" onClick={onSong}/>
        <Btn text="#책추천"/>
        <Btn text="#정보공유"/>
        <IconButton size='small' sx={{float:"right", margin:"10px",marginRight:"20px"}} onClick={Invert}>
        <FilterListIcon/>
        </IconButton>
        
        {active? <MoreBox/>: <span></span> }
    </Box>
    </Box>
  )
}

export default FilterBox