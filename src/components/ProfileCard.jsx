import React from 'react'
import Card from './common/Card'
import my from '../assets/images/svg/my.svg'
import Button from './common/Button'

const ProfileCard = () => {
    function ClickBtn() {
        alert('Button was clicked!');
    }
    return (
        <>
            <div className="flex justify-center items-center py-20">
                <div className="max-w-[1140px] px-4">
                    <div div className="flex flex-wrap gap-6 justify-center" >
                        <Card img={my} Name="Harsh Bishnoi" Bio="I'm Harsh Bishnoi, a frontend developer skilled in HTML, CSS, JavaScript, and React." Contact="8222033295" />
                    </div >
                    <Button onClick={ClickBtn} text="Click" />
                </div>
            </div>
        </>
    )
}

export default ProfileCard