'use client'

import Link from 'next/link'
import React from 'react'

const WarningHeader = () => {
  return (
    <div className="bg-zinc-100 text-white px-5 min-h-16 flex justify-between items-center border-y border-t-gray-200">
          <h1 className="urdu text-3xl !text-black">وارننگ لسٹ :</h1>
          <Link href="/warning" className='outline-none bg-green-600 !text-white capitalize rounded-lg px-4 py-2 urdu !text-lg space-x-2'>
          <span>دیکھے </span>
          <span>&rarr;</span></Link>
    </div>
  )
}

export default WarningHeader