import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Loginpage from'./components/loginpage/Loginpage';
import Registerpage from'./components/loginpage/Registerpage';
import { Container } from '@mui/system';
import Testcomments from './components/mainpage/Testcomments';
export default function App() {
  
  return (
    <Container>
        <Routes>
          <Route path='/Testcomments' element={<Testcomments/>}/>
          <Route path='/Registerpage' element={<Registerpage/>}/>
          <Route path='/Loginpage' element={<Loginpage/>}/>
          <Route path='/' element={<Loginpage/>}/>
        </Routes>
    </Container>
  )
}
