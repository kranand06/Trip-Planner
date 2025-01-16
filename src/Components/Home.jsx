import React from 'react'
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';


function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center mx-56 gap-12 '>
      <h1 className='text-5xl font-extrabold text-center mt-16 leading-relaxed'>
        <span className='text-orange-400'>Discover Your Next Adventure with Al:</span> Personalized Itineraries at Your Fingertips
      </h1>
      <p className='text-xl text-gray-500 text-center leading-relaxed'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>
      <NavLink to='/createtrip'> <Button className='bg-black text-white rounded-lg ' size='large' variant="contained">Get Started, It's Free</Button></NavLink>
      <img className='-mt-20' src="/landing.png"  />

    </div>
  )
}

export default Home