import React from 'react'
import { Link } from 'react-router-dom'

function HotelsCard({hotel}) {
  return (
    <Link to={"https://www.google.com/maps/search/?api=1&query="+hotel.hotelName+" "+hotel.hotelAddress} target="_blank">
        <div className=' p-5 rounded-xl hover:scale-105 transition-all' >
        <img className='w-full object-cover rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD3BfG2IcF-2BNXb5OUBWWfK7DAbOuuBrdQA&s" alt="trip picture" />
        <div>
          <h2 className='font-semibold text-lg pt-2'>
            {hotel.hotelName}
          </h2>
          <h3 className='text-sm text-gray-500'>
            <span className='text-lg'>📍 </span> {hotel.hotelAddress}
          </h3>
          <h3 className='text-lg'>
            💵  {hotel.price}
          </h3>
          <h3 className='text-lg'>
            ⭐️  {hotel.rating} Stars
          </h3>
        </div>

      </div>

    </Link>
  )
}

export default HotelsCard
