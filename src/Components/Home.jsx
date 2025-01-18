import React from 'react'
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';


function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48 gap-12 '>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mt-16 leading-tight md:leading-snug lg:leading-relaxed'>
        <span className='text-orange-400'>Discover Your Next Adventure with Al:</span> Personalized Itineraries at Your Fingertips
      </h1>
      <p className='text-base sm:text-lg md:text-xl text-gray-500 text-center leading-relaxed'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>
      <NavLink to='/createtrip'> <Button className='bg-black text-white rounded-lg px-6 py-3 w-full sm:w-auto text-lg md:text-xl' size='large' variant="contained">Get Started, It's Free</Button></NavLink>
      <img className='w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[750px] object-cover -mt-12' src="/landing.png" />

    </div>
  )
}

export default Home