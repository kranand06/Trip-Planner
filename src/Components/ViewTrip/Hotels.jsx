import React from 'react'
import HotelsCard from './HotelsCard'

function Hotels({hotel}) {
  return (
    <div className='grid grid-cols-3  gap-5 mt-8 mb-20'>
        {hotel?.length>0?
        hotel?.map((i) => (
          <HotelsCard hotel={i} />
        ))
        :[1,2,3].map((item)=>(
          <div className='h-80 w-full bg-slate-200 shadow-lg p-5 rounded-xl border-2'>

          </div>
        ))
        }
      </div>
  )
}

export default Hotels
