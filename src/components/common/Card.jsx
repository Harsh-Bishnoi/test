import React from 'react'
const Card = ({ img, Name, Bio, Contact }) => {
    return (
        <>
            <div className="max-w-[300px] shadow-2xl p-5">
                <img className='w-full max-w-[300px]' src={img} alt="img" />
                <h2 className='font-mono font-semibold pt-2'>{Name}</h2>
                <p className='font-mono font-medium leading-normal'>{Bio}</p>
                <a className='font-mono font-medium pt-2 leading-normal' href="tel:8222033295">{Contact}</a>
            </div>
        </>
    )
}

export default Card