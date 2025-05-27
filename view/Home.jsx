import React from 'react'
import ProfileCard from '../src/components/ProfileCard'
import Hero from '../src/components/Hero'


const Home = () => {
    return (
        <div className="min-h-screen bg-gray-300">
            <Hero />
            <ProfileCard />
        </div>
    )
}

export default Home