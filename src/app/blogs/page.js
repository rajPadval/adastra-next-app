import React from 'react'
import Footer from '../components/Footer'
import BlogsList from '../components/blogComponents/BlogsList'
import Navbar from '../components/Navbar'

const Blogs = () => {
  return (<>
    <Navbar />
    <BlogsList />
    <Footer />
  </>
  )
}

export default Blogs