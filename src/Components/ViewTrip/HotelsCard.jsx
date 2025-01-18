import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useContext } from 'react'
import { LocationContext } from './viewtrip'

import GetPhoto from '../getPhoto'


function HotelsCard({ hotel }) {
  const value = useContext(LocationContext)

  const [imageurl, setimageurl] = useState()

  useEffect(() => {
    const fetchImage = async () => {
      const url = await GetPhoto(hotel.hotelName);
      setimageurl(url)
    };
    fetchImage();
  }, [hotel])



  return (
    <Link
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        hotel.hotelName +
        " " +
        value.location
      }
      target="_blank"
    >
      <div className="rounded-xl hover:scale-105 transition-all transform hover:shadow-lg">
        <img
          className="w-full h-64 sm:h-80 object-cover rounded-xl"
          src={imageurl}
          alt="hotel picture"
        />
        <div className="p-4">
          <h2 className="font-medium text-lg sm:text-xl pt-2">{hotel.hotelName}</h2>
          <h3 className="text-sm text-gray-500">
            <span className="text-lg">📍 </span> {hotel.hotelAddress}
          </h3>
          <h3 className="text-lg">
            💵 {hotel.price}
          </h3>
          <h3 className="text-lg">
            ⭐️ {hotel.rating} Stars
          </h3>
        </div>
      </div>
    </Link>
  )
}

export default HotelsCard
