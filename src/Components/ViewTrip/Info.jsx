import React, { useEffect, useState } from 'react'
import GetPhoto from '../getPhoto';

function Info({ Data }) {

  const [imageurl, setimageurl] = useState()

  useEffect(() => {
    const fetchImage = async () => {
      const url = await GetPhoto(Data?.userInput.place);
      setimageurl(url)
    };
    fetchImage();
  }, [Data])

  return (
    <div className="flex flex-col gap-6">
      <img className="h-64 sm:h-80 w-full object-cover rounded-xl"
        src={imageurl} alt="trip picture" />

      <div>
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl my-4">
          {Data?.userInput.place}
        </h2>
        <div className="flex flex-wrap gap-3 sm:gap-5">
          <h2 className="p-2 sm:p-1 sm:px-3 bg-slate-200 rounded-full text-sm sm:text-base">
            📅  {Data?.userInput.days} Days</h2>
          <h2 className="p-2 sm:p-1 sm:px-3 bg-slate-200 rounded-full text-sm sm:text-base">
            💰  {Data?.userInput.budget} Budget</h2>
          <h2 className="p-2 sm:p-1 sm:px-3 bg-slate-200 rounded-full text-sm sm:text-base">
            🧳  Travellers : {Data?.userInput.traveller}</h2>
        </div>
      </div>

    </div>
  )
}

export default Info