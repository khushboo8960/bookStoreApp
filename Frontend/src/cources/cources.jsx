import React from 'react'
import Navbar from '../components/Navbar'
import Cource from '../components/Cource'
import Footer from '../components/Footer'


function cources() {
  return (
   <>
   <div>
    <Navbar/>
  <div className='min-h-screen'>
     <Cource/>
  </div>

    <Footer/>
   </div>
   </>
  )
}

export default cources