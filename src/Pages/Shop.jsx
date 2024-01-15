import React from 'react'
import Hero from '../Components/Hero/Hero'
import Offer from "../Components/Offer/Offer"
import Newsletter from '../Components/NewLetter/Newsletter'
import NewCollections from '../Components/NewCollections/NewCollections'

import Popular from '../Components/Popular/Popular'
const shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <Newsletter/>
      
      
    </div>
  )
}

export default shop
