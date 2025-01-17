import React, { useEffect, useState } from 'react'
import GetPhoto from '../getPhoto';

function Info({Data}) {

  const [imageurl, setimageurl] = useState()

    useEffect(() => {
        const fetchImage = async () => {
            const url = await GetPhoto(Data?.userInput.place);
            setimageurl(url)
        };
        fetchImage();
    }, [Data])

  return (
    <div>
      <img className='h-80 w-full object-cover rounded-xl' src={imageurl} alt="trip picture" />
      <div>
        <h2 className='font-bold text-4xl my-5'>
          {Data?.userInput.place}
        </h2>
        <div className='flex flex-row gap-5'>
          <h2 className='p-1 px-3 bg-slate-200 rounded-full'>📅  {Data?.userInput.days} Days</h2>
          <h2 className='p-1 px-3 bg-slate-200 rounded-full'>💰  {Data?.userInput.budget} Budget</h2>
          <h2 className='p-1 px-3 bg-slate-200 rounded-full'>🧳  Travellers : {Data?.userInput.traveller}</h2>
        </div>
      </div>

    </div>
  )
}

export default Info