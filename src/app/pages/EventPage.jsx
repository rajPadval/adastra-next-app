import React from 'react'
import Navbar from '../components/Navbar'
import EventsList from '../components/eventsComponents/EventsList'
import Footer from '../components/Footer'

const EventPage = () => {
    return (
        <div>
            <Navbar />
            <EventsList />
            <Footer/>
        </div>
    )
}
export default EventPage