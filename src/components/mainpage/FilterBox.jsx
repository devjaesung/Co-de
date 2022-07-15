import React, {useState,useEffect} from 'react'
import { Box,IconButton,Button, Typography, Divider } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList';

const FilterBox = (props) => {

    const Btn = (props) => {
        return(
            <Button variant='text' size='small' color="secondary" sx={{backgroundColor:"#ddd",margin:'10px',color:'#999'}}>{props.text}</Button>
        )
    }
    const FBtn = (props) => {
        return(
            <Button variant='contained' size='small' color="secondary" sx={{margin:'10px',color:'#fff'}}>{props.text}</Button>
        )
    }

    const SBtn =(props) => {
        return(
            <button style={{backgroundColor:"#ddd",border:"none", borderRadius:"5px", minWidth:"42px", height:"20px", color:"#666", margin:"10px",fontSize:'12px'}}>
                {props.text}
            </button>
        )
    }
    const FSBtn = (props) => {
        return(
            <button style={{backgroundColor:"#9c27b0",border:"none", borderRadius:"5px", minWidth:"42px", height:"20px", color:"#fff", margin:"10px",fontSize:'12px'}}>
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
            
            <Box sx={{backgroundColor: "#fff",boxShadow: '7px 7px 15px -7px gray, -4px 0px 10px -5px gray',border:"1px solid #ddd",borderRadius:"5px", width:"400px",minHeight:"250px",position:'fixed', top:"140px",right:"520px",zIndex:"999"}}>
                <Typography variant="body2" component="p" fontSize={12} color={"#666"} marginLeft={2} marginTop={2}>
                    장르
                </Typography>
                <Divider/>
                <FSBtn text="#팝송" />
                <SBtn text="#k-pop"/>
                <SBtn text="#힙합"/>
                <SBtn text="#락"/>
                <SBtn text="#R&B"/>
                <SBtn text="#랩"/>
                <SBtn text="#재즈"/>
                <SBtn text="#인디밴드"/>
                
                <Typography variant="body2" component="p" fontSize={12} color={"#666"} marginLeft={2} marginTop={2}>
                    주제
                </Typography>
                <Divider/>
                <FSBtn text="#노래 추천"/>
                <SBtn text="#책 추천"/>
                <FSBtn text="#정보공유"/>
                <SBtn text="#모집글"/>
                <SBtn text="#할인정보"/>

                <Typography variant="body2" component="p" fontSize={12} color={"#666"} marginLeft={2} marginTop={2}>
                    악기
                </Typography>
                <Divider/>
                <SBtn text="#피아노"/>
                <SBtn text="#베이스"/>
                <SBtn text="#기타"/>
                <SBtn text="#드럼"/>
                <SBtn text="#바이올린"/>

                <Button onClick={Invert} variant='text' size='small' color="secondary" sx={{marginTop:"10px",marginLeft:"160px", marginBottom:"10px", backgroundColor:"#ddd",color:'#9c27b0'}}>적용하기</Button>

            </Box>
        )
    }
    //category submit



  return (
    <Box>
    <span style={{width:'2000px',height:'55px',zIndex:"998",position:'fixed',top:"40px",left:"0px",backgroundColor:"#ddd"}}></span>
    <Box sx={{backgroundColor: "#fff",boxShadow: '0 7px 9px -7px gray', width:"788px",zIndex:"777",position:'fixed',top:'95px'}}>
            <FBtn text="All"/>
            <Btn text="#노래 추천"/>
            <Btn text="#정보공유"/>
            <Btn text="#팝송"/>
        <IconButton size='small' sx={{float:"right", margin:"10px",marginRight:"20px"}} onClick={Invert}>
        <FilterListIcon/>
        </IconButton>
        
        {active? <MoreBox/>: <span></span> }
    </Box>
    </Box>
  )
}

export default FilterBox