import React,{useState}from 'react'
import {Route, Routes } from 'react-router-dom'
import { Container } from '@mui/system';
import Loginpage from'./components/loginpage/Loginpage';
import Registerpage from'./components/loginpage/Registerpage';
import Profilepage from './components/profilepage/Profilepage'
import Mainpage from './components/mainpage/Mainpage';
import Writepage from './components/writepage/Writepage';
import Writetalk from './components/writepage/Writetalk';
import Mypage from './components/mypage/Mypage';
import MyEditpage from './components/mypage/MyEditpage';
export default function App() {
  const [Nickname, setNickname] = useState('Nickname')
  const [comment, setComment] = useState('안녕하세요. 코드 개발자입니다.')
  const [Art ,setArt]= useState('# coldplay # IU # 데이먼스이어 # 백예린')
  const [Song, setSong]= useState('# 밤편지 # 0310 # Antifreeze')

  return (
    <Container>
        <Routes>
          <Route path='/Registerpage' element={<Registerpage/>}/>
          <Route path='/Loginpage' element={<Loginpage/>}/>
          <Route path='*' element={<Mainpage/>}/>
          <Route path='/Profile' element={<Profilepage/>}/>
          <Route path='/Writepage' element={<Writepage/>}/>
          <Route path='/Writetalk' element={<Writetalk/>}/>
          <Route path='/Mypage' element={<Mypage Nickname={Nickname} comment={comment} Art={Art} Song={Song}/>}/>
          <Route path='/MyEditpage' element={<MyEditpage Nickname={Nickname} comment={comment} Art={Art} Song={Song} setComment={setComment} setArt={setArt} setSong={setSong}setNickname={setNickname}/>}/>
        </Routes>
    </Container>
  )
}