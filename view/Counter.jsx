import React from 'react'
import CounterApp from '../src/components/CounterApp'
import Hero from '../src/components/Hero'

const Counter = () => {
  return (
    <div className="min-h-screen bg-gray-300">
      <Hero />
      <CounterApp />
    </div>
  )
}

export default Counter