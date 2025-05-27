import React from 'react'

const Input = ({ type, placeholder, inputClass }) => {
    return (
        <>
            <input className={`border border-black outline-0 sm:max-w-[300px] w-full p-3 rounded-sm ${inputClass}`} type={type} placeholder={placeholder} />
        </>
    )
}

export default Input