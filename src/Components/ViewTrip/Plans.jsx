import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LocationContext } from './viewtrip'
import GetPhoto from '../getPhoto'

function Plans({ plan }) {

  const [imageurl, setimageurl] = useState()

  useEffect(() => {
    const fetchImage = async () => {
      const url = await GetPhoto(plan.placeName);
      setimageurl(url)
    };
    fetchImage();
  }, [plan])

  const value = useContext(LocationContext)
  return (
    <Link
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        plan.placeName +
        " " +
        value.location
      }
      target="_blank"
    >
      <div className="flex flex-col sm:flex-row rounded-2xl p-4 hover:scale-105 transition-all">
        <img
          className="w-full sm:w-[200px] h-[200px] object-cover rounded-2xl"
          src={imageurl}
          alt="itinerary picture"
        />
        <div className="ml-0 sm:ml-4 mt-4 sm:mt-0">
          <h2 className="font-medium text-lg sm:text-xl">{plan.placeName}</h2>
          <h2 className="text-gray-500">{plan.placeDetails}</h2>
          <h2 className="">
            <span className="text-xl">🎟️ </span> Tickets: {plan.ticket}
          </h2>
          <h2 className="">Ratings: {plan.ratings} ⭐️</h2>
          <h2 className="text-gray-500">
            <span className="text-xl">⏱️ </span> {plan.timeToTravel}
          </h2>
        </div>
      </div>
    </Link>
  )
}

export default Plans
