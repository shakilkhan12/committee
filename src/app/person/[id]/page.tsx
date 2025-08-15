'use client'
import Header from '@/components/Header'
import { data } from '@/data/persons'
import { History, Person } from '@/types'
import { notFound } from 'next/navigation'
import React from 'react'
type PropTypes = {
    params: {
        id: number
    }
}
const page = ({params}: PropTypes) => {

   const person = data.find(person => person.id === Number(params.id))
   if(!person) {
     return notFound()
   }
   const total = (person: Person) => {
    let totalAmount = person.details.dues;
    person.details.history.forEach((history:History) => {
        if(typeof totalAmount === 'number' && typeof history.amount === 'number') {
            totalAmount += history.amount;
        }  
    })
    return totalAmount;
   }

  return (
    <div>
         <Header />
         <div className='max-w-screen-xl px-5 py-3 mx-auto'>
            <div className='border rounded'>
                <div className='flex justify-between gap-x-5 items-center p-4'>
                    <h1 className='text-base font-bold urdu'>نام :</h1>
                    <h1 className='text-base font-bold urdu'>{person.urdu}</h1>
                </div>
                <div className='flex justify-between gap-x-5 items-center p-4 border-t'>
                    <h1 className='text-base font-bold urdu'>بقایاجات :</h1>
                    <h1 className='text-base font-bold urdu flex items-center space-x-2'><span>روپے </span><span>{person.details?.dues}</span></h1>
                </div>
                <div className='border-t p-4'>
                    <h3 className='urdu text-center text-xl'>وفات پانے والے افراد کی تفصیلات</h3>
                </div>
                <div className="overflow-hidden bg-white shadow-sm">
                    <div className='overflow-x-auto'>
                    <table className='min-w-full text-left text-sm'>
                        <thead className='sticky top-0 z-10 bg-gray-50 text-gray-600'>
                            <tr className='[&>th]:px-4 [&>th]:py-3'>
                                <th className='px-4 py-3 urdu min-w-[130px] border'>نام </th>
                                <th className='px-4 py-3 urdu min-w-[130px] border'>تاریخ وفات</th>
                                <th className='px-4 py-3 urdu min-w-[130px] border'>وصول / بقایا </th>
                            </tr>
                        </thead>
                        <tbody  className='divide-y divide-gray-100'>
                          {person?.details?.history?.map(history => {
                            return (
                                <tr>
                                    <td className='px-4 py-3 border'><h3 className='urdu text-base font-semibold '>{history.name}:</h3>
                                    </td>
                                    <td className='font-semibold border px-4 py-3 urdu'>{history.death_date}</td>
                                    <td className='border px-4 py-3'>{typeof history.amount === 'number' ?                                     <h3 className='font-semibold urdu flex items-center space-x-2'><span>روپے</span> <span>{history.amount}</span></h3>
 : <h3 className='font-semibold urdu flex text-right  w-[130px] space-x-2'><span>{history.amount}</span></h3>}</td>
                                </tr>
                            )
                          })}
                        </tbody>
                    </table>
                   
                </div>
                </div>
                
                <div className={`border-t p-4 flex justify-between items-center ${total(person) === 0 ? 'bg-green-200' : 'bg-red-200'}`}>
                    <h3 className={`urdu text-base font-bold ${total(person) === 0 ? 'text-green-800' : 'text-red-800'}`}>ٹوٹل بقایا جات:</h3>
                    <h3 className='urdu text-base font-bold'>
                        {typeof person.details?.dues === 'number' ? <div className='flex items-center space-x-2 '>
                        <span>روپے </span>
                        <span>{total(person)}</span></div> : person.details.dues}
                    </h3>
                </div>
            </div>
         </div>
    </div>
  )
}

export default page