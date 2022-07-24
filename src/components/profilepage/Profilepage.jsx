import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProfileTop from './ProfileTop'
import TopBar from '../Topbar'

const Profilepage = () => {
  return (
    <>
      <TopBar/>
      <ProfileTop/>
    </>

  )
}

export default Profilepage