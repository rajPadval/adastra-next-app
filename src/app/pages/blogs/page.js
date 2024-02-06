import React from 'react'
import Footer from '../../components/Footer'
import BlogsList from '../../components/blogComponents/BlogsList'
import Navbar from '../../components/Navbar'
import Home_Hero from '@/app/components/homepageComponent/Home_Hero'

const Blogs = () => {
  return (
  <>
    <Navbar />
    <Home_Hero name="Blogs"/>
    <BlogsList />
    <Footer />
  </>
  )
}

export default Blogs