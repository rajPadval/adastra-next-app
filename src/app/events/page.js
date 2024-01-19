import React from 'react'
import Navbar from '../components/Navbar'
import EventsList from '../components/eventsComponents/EventsList'
import Footer from '../components/Footer'

const Events = () => {
  return (
    <>
      <Navbar />
      <EventsList />
      <Footer />
    </>
  )
}

export default Events