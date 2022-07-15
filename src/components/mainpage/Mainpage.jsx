import React from 'react'
import MainTalk from './MainTalk'
import { Container } from '@mui/system'
import FilterBox from './FilterBox'
import SwitchBox from './SwitchBox'

const Mainpage = () => {
  return (
    <>
    <Container>
      <SwitchBox />
      <MainTalk/>
    </Container>
    </>
  )
}

export default Mainpage