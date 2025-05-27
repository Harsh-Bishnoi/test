import React from 'react'
import ProductList from '../src/components/ProductList'
import Hero from '../src/components/Hero'

const About = () => {
  return (
      <div className="min-h-screen bg-gray-300">
        <Hero />
        <ProductList />
      </div>
  )
}

export default About