"use client"
import Link from "next/link";
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import WriteBlogPage from '@/components/WriteBlogPage';
import News from '@/components/News'
import React from 'react'

function index() {
  return (
    <>
      <Navbar/>
      <Link href="/components/Navbar">
          <a>Blog Page</a>
      </Link>
      
      <News/>
      <Footer/>
    </>
  )
}

export default index
