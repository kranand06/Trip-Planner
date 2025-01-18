import React from 'react'
import Plans from './Plans'

function Day({ day }) {
  return (
    <div>
      <h2 className="font-semibold text-xl sm:text-2xl mt-12 mb-4">
        Day {day.day}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {day?.plan.length > 0 ? (
          day?.plan.map((i, index) => <Plans key={index} plan={i} />)
        ) : (
          [1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-80 w-full bg-slate-200 shadow-lg p-5 rounded-xl border-2 animate-pulse"
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Day