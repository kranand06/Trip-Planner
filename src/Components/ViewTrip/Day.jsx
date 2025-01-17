import React from 'react'
import Plans from './Plans'

function Day({day}) {
  return (
    <div>
        <h2 className='font-semibold text-xl mt-12 m-3'>
            Day {day.day}
        </h2>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
                {day?.plan.length > 0 ?
                  day?.plan.map((i) => (
                    <Plans plan={i} />
                  ))
                  : [1, 2, 3,4].map((item) => (
                    <div className='h-80 w-full bg-slate-200 shadow-lg p-5 rounded-xl border-2'>
        
                    </div>
                  ))
                }
              </div>
      
    </div>
  )
}

export default Day
