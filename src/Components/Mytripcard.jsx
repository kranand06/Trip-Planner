import React from 'react'
import { Link } from 'react-router-dom'

function Mytripcard({ trip }) {

  // console.log(trip);


  return (
    <Link to={"/viewtrip/"+trip.id}>
      <div className='shadow-lg p-5 rounded-xl border-2 hover:scale-105 transition-all' >
        <img className='w-full object-cover rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD3BfG2IcF-2BNXb5OUBWWfK7DAbOuuBrdQA&s" alt="trip picture" />
        <div>
          <h2 className='font-bold text-xl pt-2'>
            {trip.userInput.place}
          </h2>
          <h3 className='text-md text-gray-500'>
            {trip.userInput.days} days trip with {trip.userInput.budget} budget
          </h3>
        </div>

      </div>
    </Link>
  )
}

export default Mytripcard