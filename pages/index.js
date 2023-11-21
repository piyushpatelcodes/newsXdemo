"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import WriteBlogPage from '@/components/WriteBlogPage';
import News from '@/components/News'
import React from 'react'

function index() {
  return (
    <>
      <Navbar/>
      <WriteBlogPage />
      <News/>
      <Footer/>
    </>
  )
}

export default index
