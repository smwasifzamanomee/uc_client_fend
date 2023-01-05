import React from 'react'
import Hero from './Hero'
import InterCityRoutes from './InterCityRoutes'
import OnlineBooking from './OnlineBooking'
import AboutUS from './AboutUS'
import PhotoGallery from './PhotoGallery'
import Testimonial from './Testimonial'
import OurFleet from '../our-fleet/OurFleet'

const Main = () => {
  return (
    <>
    <Hero />
    <OurFleet />
    <InterCityRoutes/>
    <AboutUS/>
    <PhotoGallery/>
    <Testimonial/>
    <OnlineBooking/>
    </> 
  )
}

export default Main