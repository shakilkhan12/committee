'use client'
import Header from '@/components/Header'
import SmallHeader from '@/components/SmallHeader'
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
                    <h3 className='urdu text-center text-xl'>مرے ہوئے لوگوں کی تفصیلات</h3>
                </div>
                <div className=''>
                    {person?.details?.history?.map(history => {
                        if(typeof history.amount === 'number') {
                            return (
                                <div className='flex items-center justify-between border-t py-3 px-6'>
                                    <h3 className='urdu text-base font-semibold'>{history.name}:</h3>
                                    <h3 className='font-semibold urdu flex items-center space-x-2'><span>روپے</span> <span>{history.amount}</span></h3>
                                </div>
                            )
                        } else {
                           return  (
                            <div className='flex items-center justify-between border-t py-3 px-6'>
                           <h3 className='urdu text-base font-semibold'>{history.name}:</h3>
                           <h3 className='font-semibold urdu flex items-center space-x-2'><span>{history.amount}</span></h3>
                       </div>
                           )
                        }
                    })}
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