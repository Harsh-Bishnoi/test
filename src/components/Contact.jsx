import React from 'react'
import Input from './common/Input'
import Button from './common/Button'

const Contact = () => {
    return (
        <>
            <div className="flex justify-center items-center py-30">
                <div className="max-w-[1140px] px-4 w-full mx-auto">
                    <h2 className='font-mono text-3xl text-center'>Contact</h2>
                    <div className="flex gap-3 justify-center mt-10 flex-col sm:flex-row">
                        <Input type="text" placeholder="First Name" />
                        <Input type="text" placeholder="Last Name" />
                    </div>
                    <div className="flex mt-3 mx-auto justify-center w-full">
                        <Input inputClass="!max-w-[612px]" type="Email" placeholder="Email" />
                    </div>
                    <textarea className='mx-auto flex border w-full max-w-[612px] mt-3 p-3 rounded-sm min-h-[200px] max-h-[200px]' placeholder='Description'></textarea>
                    <Button text="Submit" />
                </div>
            </div>
        </>
    )
}

export default Contact