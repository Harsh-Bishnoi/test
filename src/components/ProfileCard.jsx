import React from 'react'
import Card from './common/Card'
import img_1 from '../assets/images/png/img-1.png'
import Button from './common/Button'

const ProfileCard = () => {
    function ClickBtn() {
        alert('Button was clicked!');
    }
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-300">
                <div className="max-w-[1140px] px-4">
                    <h1 className='text-center font-mono text-4xl pb-5 text-black'>Profile Card</h1>
                    <div div className="flex flex-wrap gap-6 justify-center" >
                        <Card img={img_1} Name="Harsh Bishnoi" Bio="I'm Harsh Bishnoi, a frontend developer skilled in HTML, CSS, JavaScript, and React." Contact="8222033295" />
                    </div>
                    <Button onClick={ClickBtn} text="Click" />
                </div>
            </div>
        </>
    )
}

export default ProfileCard