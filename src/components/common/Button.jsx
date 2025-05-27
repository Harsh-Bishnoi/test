import React from 'react'

const Button = ({ text }) => {
    return (
        <button className='font-mono text-lg bg-black mx-auto flex text-white py-2 px-7 border border-black hover:bg-white hover:text-black transition-all duration-200 ease-linear cursor-pointer mt-5 rounded-full'>{text}</button>
    )
}

export default Button