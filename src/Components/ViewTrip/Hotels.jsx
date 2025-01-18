import React from "react";
import HotelsCard from "./HotelsCard";

function Hotels({ hotel }) {
  return (
    <div className="mt-12">
      <h2 className="font-semibold text-2xl sm:text-3xl mb-6">
        Hotel Recommendations 🏩
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotel?.length > 0 ? (
          hotel?.map((i, index) => <HotelsCard key={index} hotel={i} />)
        ) : (
          [1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-80 w-full bg-slate-200 shadow-lg p-5 rounded-xl border-2 animate-pulse"
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Hotels;