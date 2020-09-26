import React from 'react'
import ContactMe from './ContactMe'

const Hero = () => {
  return (
    <div className='mx-6 md:mx-0 mt-10 mb-5 lg:pt-16 leading-none'>
      <div className='pt-16 lg:pt-32'>
        <h1 className='text-4xl uppercase pl-8'>Hi, I´m Paulo Henrique Barbosa Santos</h1>
        <h2 className='text-4xl font-bold lg:text-5xl uppercase pl-8'>Fullstack Developer</h2>
        <ContactMe />
      </div>
      <br />
      <br />
    </div>
  )
}
export default Hero
