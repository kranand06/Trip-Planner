import React from 'react'
import Day from './Day'

function Itinerary({data}) {
  return (
    <div className='mt-5 mb-24'>
      <h2 className='font-semibold text-2xl mt-12 mb-6'>Places to Visit 🌉</h2>
      <div className=''>
        {data?.length > 0 ?
          data?.map((i) => (
            <Day day={i} />
          ))
          : [1, 2, 3].map((item) => (
            <div className='h-40 w-full bg-slate-200 shadow-lg p-5 rounded-xl border-2'>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Itinerary
