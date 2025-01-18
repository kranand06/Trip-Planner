import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GetPhoto from './getPhoto';

function Mytripcard({ trip }) {

  const [imageurl, setimageurl] = useState()

  useEffect(() => {
    const fetchImage = async () => {
      const url = await GetPhoto(trip.userInput.place);
      setimageurl(url)
    };
    fetchImage();
  }, [trip])


  return (
    <Link to={"/viewtrip/" + trip.id}>
      <div className='shadow-lg p-5 rounded-xl border-2 hover:scale-105 transition-all' >
        <img className='w-full h-60 object-cover rounded-xl' src={imageurl} alt="trip picture" />
        <div className="mt-3">
          <h2 className='font-bold text-lg sm:text-xl'>
            {trip.userInput.place}
          </h2>
          <h3 className='text-sm sm:text-md text-gray-500'>
            {trip.userInput.days} days trip with {trip.userInput.budget} budget
          </h3>
        </div>

      </div>
    </Link>
  )
}

export default Mytripcard