import React from 'react'
import Day from './Day'

function Itinerary({ data }) {
  return (
    <div className="mt-5 mb-24">
      <h2 className="font-semibold text-2xl sm:text-3xl mb-6">Places to Visit 🌉</h2>

      <div className="grid grid-cols-1 gap-6">
        {data?.length > 0
          ? data.map((i, index) => <Day key={index} day={i} />)
          : [1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-40 w-full bg-slate-200 shadow-lg p-5 rounded-xl border-2 animate-pulse"
            />
          ))}
      </div>
    </div>
  )
}

export default Itinerary
