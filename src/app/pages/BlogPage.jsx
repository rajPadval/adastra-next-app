import React from 'react'
import Navbar from '../components/Navbar'
import BlogsList from '../components/blogComponents/BlogsList'
import Footer from '../components/Footer'

const BlogPage = () => {
  return (
    <div>
        <Navbar/>
        <BlogsList/>
        <Footer/>
    </div>
  )
}

export default BlogPage