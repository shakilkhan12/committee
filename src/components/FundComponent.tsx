'use client'

import { dead } from "@/data/dead_data";
import { data } from "@/data/persons";
import { useEffect, useState } from "react"

const FundComponent = () => {
  const [amount, setAmount] = useState(0);
  const [deadAmount, setDeadAmount] = useState(0)
  const [advancedAmount] = useState(13000)
  const deadCalculation = (): number => {
    let total = 0;
    dead.forEach(data => {
      if(data.amount) {
        total += data.amount;
      }
    })
    return total;
  }
  const calculateDepositAmountSum = (): number => {
    let total = 0;
    data.forEach(person => {
      if(person.details) {
        
        person.details.history.forEach(entry => {
          if(entry.deposit_amount) {
            total += entry.deposit_amount;
          }
        });
      }
    })
    return total;
  };
  useEffect(() => {
    const total = calculateDepositAmountSum()
    const total2 = deadCalculation();
    setAmount(total + advancedAmount)
    setDeadAmount(total2);
  }, [])
  return (
    <section className="bg-zinc-900 text-white px-5 min-h-16 flex justify-between items-center border-y border-t-gray-200">
    <h1 className="urdu text-3xl !text-white">موجودہ رقم :</h1>
   <h1 className="font-bold text-base urdu flex items-center space-x-2 !text-white"><span>روپے</span> <span>56970</span></h1>
</section>
  )
}

export default FundComponent