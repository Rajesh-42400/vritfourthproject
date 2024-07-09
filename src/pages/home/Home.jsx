import React from 'react'
import Intro from './maincontents/Intro'
import Products from './products/Products'
import ProductDetails from './productdetails/ProductDetails'
import Contacts from './contacts/Contacts'
import Freq from './faq/Freq'
import Questions from './questions/Questions'
const Home = () => {
  return (
    <>
     <Intro />
     <Products />
     <ProductDetails />
     <Contacts />
     <Freq />
     <Questions />
    </>
  )
}

export default Home