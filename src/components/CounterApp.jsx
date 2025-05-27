import React, { useState, useEffect } from "react";
import Button from "./common/Button";

const CounterApp = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    useEffect(() => {
        console.log(`${count}`);
    }, [count]);

    return (
        <>
            <div className="flex justify-center items-center pb-20">
                <div className="max-w-[1140px] px-4 mx-auto flex flex-col justify-center items-center">
                    <div className="font-mono text-3xl">{count}</div>
                    <div className="gap-4 flex justify-center items-center mt-4">
                        <Button onClick={decrement} text="Decrease" />
                        <Button onClick={increment} text="Increase" />
                    </div>
                    <Button
                        onClick={reset}
                        btnClass={
                            count === 0
                                ? "border-gray-400 bg-gray-400 hover:!bg-gray-400 hover:text-white !cursor-not-allowed"
                                : "bg-black hover:border-red-500 hover:!bg-red-500 hover:text-white"
                        }
                        text="Reset"
                    />
                </div>
            </div>
        </>
    )
}

export default CounterApp