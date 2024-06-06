import Resources from '@/components/Resources'
import React from 'react'

export default function page  () {
  return (
    <div className='flex flex-col w-screen min-h-screen text-center pt-[100px]'>
        <div>
            <h1 className='text-3xl font-normal'>Choose <span className='text-blue-700 font-bold'>Resource</span></h1>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-[10px]'>
          <Resources />
        </div>
    </div>
  )
}
