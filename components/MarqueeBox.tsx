import React from 'react'

const MarqueeBox = ({data} : {
    data: string
}) => {
  return (
        <div className='bg-black h-6 w-24 flex text-sm items-center justify-center text-neutral-300 border border-neutral-400 rounded-md'>
        <h3>{data}</h3>
    </div>
  )
}

export default MarqueeBox