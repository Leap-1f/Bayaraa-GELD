import { useState } from "react";

export const RangeSlider = () => {
  const [minprice, setMinPrice] = useState(100);
  const [maxprice, setMaxPrice] = useState(900);
  const min = 0;
  const max = 1000;
  const minthumb = ((minprice - min) / (max - min)) * 100;
  const maxthumb = ((maxprice - min) / (max - min)) * 100;

  const minTrigger = (event) => {
    const newMinPrice = Math.min(parseInt(event.target.value), maxprice - 100);
    setMinPrice(newMinPrice);
  };

  const maxTrigger = (event) => {
    const newMaxPrice = Math.max(parseInt(event.target.value), minprice + 100);
    setMaxPrice(newMaxPrice);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative max-w-xl w-full">
        <div>
          <input
            type="range"
            step="10"
            min={min}
            max={max}
            onInput={minTrigger}
            value={minprice}
            className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
          />

          <input
            type="range"
            step="10"
            min={min}
            max={max}
            onInput={maxTrigger}
            value={maxprice}
            className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
          />

          <div className="relative z-10 h-2">
            <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>

            <div
              className="absolute z-20 top-0 bottom-0 rounded-md bg-green-300"
              style={{ right: `${100 - maxthumb}%`, left: `${minthumb}%` }}
            ></div>

            <div
              className="absolute z-30 w-6 h-6 top-0 left-0 bg-green-300 rounded-full -mt-2 -ml-1"
              style={{ left: `${minthumb}%` }}
            ></div>

            <div
              className="absolute z-30 w-6 h-6 top-0 right-0 bg-green-300 rounded-full -mt-2 -mr-3"
              style={{ right: `${100 - maxthumb}%` }}
            ></div>
          </div>
        </div>

        <div className="flex justify-between items-center py-5">
          <div>
            <input
              type="text"
              maxLength="5"
              onInput={minTrigger}
              value={minprice}
              className="px-3 py-2 border border-gray-200 rounded w-24 text-center"
            />
          </div>
          <div>
            <input
              type="text"
              maxLength="5"
              onInput={maxTrigger}
              value={maxprice}
              className="px-3 py-2 border border-gray-200 rounded w-24 text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
