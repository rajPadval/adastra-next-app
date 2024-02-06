import React from 'react'
import Navbar from '../../components/Navbar'
import EventsList from '../../components/eventsComponents/EventsList'
import Footer from '../../components/Footer'
import Home_Hero from '@/app/components/homepageComponent/Home_Hero'

const Events = () => {
  return (
    <>
      <Navbar />
      <Home_Hero/>
      <EventsList />
      <Footer />
    </>
  )
}

export default Events