import {React, useState} from 'react'
import { Box, Avatar, Chip, Divider, Container, Typography, Tabs, Tab} from '@mui/material'
import FeedTab from './FeedTab'
import TalkTab from './TalkTab'
import FollowBox from './FollowBox'


const ProfileTop = () => {

  const [value, setValue] = useState('one');

  const handleChange = (event,newValue) => {
    setValue(newValue);
  };

  const menuList = {
    'one': <FeedTab/>,
    'two': <TalkTab/>
  }

  return (
      <Box sx={{
        width: '100%',
        position: 'absolute',
        left: 0,
        top: '54px',
        overflowX: 'hidden'}}>
      <img
      style={{
        width: '100%',
        height: '120px',
        objectFit: 'cover'
      }} src="images/bg-2.jpg" alt="sample"/>
      <Avatar alt="profile image" src="images/profile.jpg" sx={{
        width: '120px',
        height: '120px',
        position: 'absolute',
        left: '100px',
        top: '30px',
        zIndex: '333'
        }}/>
        <Box elevation={1} sx={{
          width:'100%',
          height: '100px',
          backgroundColor: '#fff',
          boxShadow: '0 7px 9px -7px gray',
          position:'relative',
          top: '-5px'
          }}>
          <Typography sx={{position: 'absolute', left: '220px', top: '0', fontWeight:'bold'}}>Nickname</Typography>
          <Container sx={{position: 'absolute', left:'180px', top:'25px'}}>
            <Chip label="인디음악" size='small' sx={{mr: '5px', color: '#777'}}/>
            <Chip label="팝송" size='small' sx={{mr: '5px', color: '#777'}}/>
            <Chip label="OST" size='small' sx={{color: '#777'}}/>
          </Container>
          <Divider sx={{position: 'relative', top:'60px', width: .9, margin: '0 auto'}}/>
          <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{position:'relative', top: '51px', left: '70px'}}
      >
        <Tab value="one" label="Feed" />
        <Tab value="two" label="Talk" />
      </Tabs>

        </Box>
       
        <Container sx={{display: "flex", width: .9}}>
          {menuList[value]}
          <FollowBox/>
        </Container>
      </Box>

  )
}

export default ProfileTop;