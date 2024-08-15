'use client'

import { data } from "@/data/persons"
import { useEffect, useState } from "react"

const SmallHeader = () => {
    const [sum, setSum] = useState(0)
    useEffect(() => {
      let sum = 0;

        data?.forEach(data => {
        if(typeof data?.details.dues === 'number') {
            sum += data?.details.dues;
        }
        data.details.history.forEach(item => {
          if(typeof item.amount === 'number') {
            sum += item.amount;
          }
        })
     })
        setSum(sum);
    }, [])
  return (
    <section className="bg-gray-100 px-5 min-h-16 flex justify-between items-center border-y border-t-gray-200">
        <h1 className="urdu text-3xl">تمام  بقایاجات:</h1>
       <h1 className="font-bold text-base urdu flex items-center space-x-2"><span>روپے</span> <span>{sum}</span></h1>
    </section>
  )
}

export default SmallHeader