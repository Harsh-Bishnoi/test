import React from 'react'

const Button = ({ text, onClick, btnClass }) => {
    return (
        <button onClick={onClick} className={`font-mono text-lg bg-black mx-auto flex text-white py-2 px-7 border border-black hover:bg-white hover:text-black transition-all duration-200 ease-linear cursor-pointer mt-5 rounded-full ${btnClass}`}>{text}</button>
    )
}

export default Button