import { useEffect, useState } from 'react'
import './App.css'
import CoffeeCard from './CoffeeCard'

function App() {
  const [coffees, setCoffees] = useState([])

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("https://api.sampleapis.com/coffee/hot")
        const data = await res.json()
        setCoffees(data)
      } catch (error) {
        console.error(error)
      }
    }

    loadData()
  }, [])

  return (
    <section>
      <h1>Cafés</h1>
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </section>
  )
}

export default App