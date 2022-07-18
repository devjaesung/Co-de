import React from 'react'
import {Route, Routes } from 'react-router-dom'
import { Container } from '@mui/system';
import Loginpage from'./components/loginpage/Loginpage';
import Registerpage from'./components/loginpage/Registerpage';
import Profilepage from './components/profilepage/Profilepage'
import Mainpage from './components/mainpage/Mainpage';
import Writepage from './components/writepage/Writepage';
import Writetalk from './components/writepage/Writetalk';
import Mypage from './components/mypage/Mypage';
export default function App() {
  
  return (
    <Container>
        <Routes>
          <Route path='/Registerpage' element={<Registerpage/>}/>
          <Route path='/Loginpage' element={<Loginpage/>}/>
          <Route path='*' element={<Mainpage/>}/>
          <Route path='/Profile' element={<Profilepage/>}/>
          <Route path='/Writepage' element={<Writepage/>}/>
          <Route path='/Writetalk' element={<Writetalk/>}/>
          <Route path='/Mypage' element={<Mypage/>}/>
        </Routes>
    </Container>
  )
}
