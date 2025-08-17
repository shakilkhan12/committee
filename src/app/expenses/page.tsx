import Header from '@/components/Header'
import { dead } from '@/data/dead_data'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header />
        {dead.length > 0 ? 
        <div className="overflow-hidden bg-white shadow-sm">
           <div className='overflow-x-auto'>
             <table className='min-w-full text-left text-sm'>
            <thead className='sticky top-0 z-10 bg-gray-50 text-gray-600'>
                <tr className='[&>th]:px-4 [&>th]:py-3'>
                    <th className='px-4 py-3 urdu min-w-[130px] border'>سیریل نمبر </th>
                    <th className='px-4 py-3 urdu min-w-[130px] border'>نام </th>
                    <th className='px-4 py-3 urdu min-w-[130px] border'>مختص رقم</th>
                    <th className='px-4 py-3 urdu min-w-[130px] border'>خرچ شدہ رقم</th>
                    <th className='px-4 py-3 urdu min-w-[130px] border'>بچ جانے والی رقم</th>

                </tr>
            </thead>
            <tbody className='divide-y divide-gray-100'>
                {dead.map((person, index) => {
                    return (
                        <tr>
                            <td className='font-semibold border px-4 py-3 urdu'>{index + 1}</td>
                            <td className='font-semibold border px-4 py-3 urdu'>{person.name}</td>
                            <td className='font-semibold border px-4 py-3 urdu'>{person.amount}</td>
                            <td className='font-semibold border px-4 py-3 urdu'>{person.expense}</td>
                            <td className='font-semibold border px-4 py-3 urdu'>{person.expense ? person.amount - person.expense : ''}</td>

                        </tr>
                    )
                })}
            </tbody>
        </table>
           </div>
        </div>
        : ''}
    </div>
  )
}

export default page