'use client'

import { data } from "@/data/persons"
import { useEffect, useState } from "react"

const SmallHeader = () => {
    const [sum, setSum] = useState(0)
    useEffect(() => {
        let total = 0;
        data.forEach(person => {
            if(typeof person.amount === 'number') {
                total += person.amount;
            }
        })
        setSum(total);
    }, [])
  return (
    <section className="bg-gray-100 px-5 min-h-16 flex justify-between items-center border-y border-t-gray-200">
        <h1 className="urdu text-3xl">تمام  بقایاجات:</h1>
       <h1 className="font-bold text-base">{sum}</h1>
    </section>
  )
}

export default SmallHeader