import React from 'react'
import {Route, Routes} from 'react-router-dom'
import FeedMainpage from '../mainpage/FeedMainpage'
import MainTalk from './MainTalk'
import Topbar from'../Topbar'
import SwitchBox from './SwitchBox'
import TalkDetail from '../talkdetail/TalkDetail'
import Commentpage from './Hoon/Commentpage'

const Mainpage = () => {
  return (
    <>
    <Topbar/>
    <SwitchBox/>
    <Routes>
    <Route path='/' element={<FeedMainpage/>}/>
    <Route path='/FeedDetail' element={<Commentpage/>}/>
    <Route path='/TalkMain' element={<MainTalk/>}/>
    <Route path='/TalkMain/TalkDetail' element={<TalkDetail/>}/>
    </Routes>

    </>
  )
}

export default Mainpage