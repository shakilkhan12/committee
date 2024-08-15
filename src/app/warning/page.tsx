'use client'

import Header from "@/components/Header"
import WarningTable from "@/components/WarningTable"
import { data } from "@/data/persons"
import { History, Person } from "@/types"
import { useEffect, useState } from "react"


const page = () => {
  const [filteredPersons, setFilteredPersons] = useState<Person[]>([])
  const filterPersons = () => {
      const persons = data.filter((person: Person) => {
        let total = 0;
        if(typeof person.details.dues === 'number') {
            total += person.details.dues;
        }
        person.details.history.forEach((history: History) => {
          if(typeof history.amount === 'number' && typeof total === 'number') {
            total += history.amount;
          }
        })
        if(total >= 3000) {
            return person;
        }
      })
      setFilteredPersons(persons)
  }
  useEffect(() => {
    filterPersons()
  }, [])
  console.log(filteredPersons)
  return (
    <div>
      <Header />
      <WarningTable data={filteredPersons} />
    </div>
  )
}

export default page