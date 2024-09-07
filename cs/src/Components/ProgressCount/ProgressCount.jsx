import React from 'react'
import './ProgressCount.css'

const ProgressCount = () => {
  return (
    <div class="progresscount p-4 mt-10 ml-7 lg:w-100 sm:w-2/3 w-1/3 flex flex-col gap-y-1 bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] dark:bg-dark_50 p-3 rounded-md  border border-gray-200 dark:border-zinc-800">
          <div class="progresscount-container flex justify-between w-full flex-wrap">
            <span class="progresscount-container-count  md:text-sm text-xs text-[#8C8C8C] sm:mr-2 md:mr-2">Your Progress: <strong>100/100</strong></span>
            <span class="progresscount-container-pr  text-sm md:text-lg font-semibold text-brand">100% Complete</span>
          </div>
          <div>
            <div class="progresscount-container-hr  h-2 rounded-xl bg-[#0e0ead] dark:bg-dark_40">
              <div class="h-full rounded-xl transition-all ease-in-out duration-300 bg-brand_50" Style={'width: 6%'}></div>
            </div>
          </div>
        </div>
  )
}

export default ProgressCount
