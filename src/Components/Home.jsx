import React from 'react'
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';


function Home() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9 '>
        <h1 className='text-5xl font-extrabold text-center mt-16'>
            <span className='text-orange-400'>Discover Your Next Adventure with Al:</span> Personalized Itineraries at Your Fingertips
            </h1>
            <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>
            <NavLink to='/createtrip'> <Button className='bg-black text-white rounded-lg' size='large' variant="contained">Get Started, It's Free</Button></NavLink>
            
    </div>
  )
}

export default Home