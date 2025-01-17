import React, { useEffect, useState } from 'react'

function Info({Data}) {

  return (
    <div>
      <img className='h-80 w-full object-cover rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD3BfG2IcF-2BNXb5OUBWWfK7DAbOuuBrdQA&s" alt="trip picture" />
      <div>
        <h2 className='font-bold text-3xl my-5'>
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