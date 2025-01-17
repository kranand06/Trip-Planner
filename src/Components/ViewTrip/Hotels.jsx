import React from 'react'
import HotelsCard from './HotelsCard'

function Hotels({ hotel }) {
  return (
    <div>
      <h2 className='font-semibold text-2xl mt-12 mb-6'>Hotel Recommendation 🏩</h2>
      <div className='grid md:grid-cols-2 xl:grid-cols-3  gap-8'>
        {hotel?.length > 0 ?
          hotel?.map((i) => (
            <HotelsCard hotel={i} />
          ))
          : [1, 2, 3].map((item) => (
            <div className='h-80 w-full bg-slate-200 shadow-lg p-5 rounded-xl border-2'>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Hotels
