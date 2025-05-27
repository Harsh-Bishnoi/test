import React, { useState } from "react";

const CounterApp = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <>
            <div className="flex justify-center items-center pb-20">
                <div className="max-w-[1140px] px-4 mx-auto flex flex-col justify-center items-center">
                    <div className="font-mono text-3xl">{count}</div>
                    <div className="gap-4 flex justify-center items-center mt-4">
                        <button className="border-black border bg-black transition-all duration-200 ease-linear hover:bg-white hover:text-black text-white py-2 px-7 rounded-full font-mono text-lg cursor-pointer" onClick={decrement}>
                            Decrease
                        </button>
                        <button className="border-black border bg-black transition-all duration-200 ease-linear hover:bg-white hover:text-black text-white py-2 px-7 rounded-full font-mono text-lg cursor-pointer" onClick={increment}>
                            Increase
                        </button>
                    </div>
                    <button className={count === 0 ?
                        "border-gray-400 border mx-auto flex mt-4 bg-gray-400 transition-all duration-200 ease-linear text-white py-2 px-7 rounded-full font-mono text-lg cursor-not-allowed"
                        : "border-black border mx-auto flex mt-4 bg-black transition-all duration-200 ease-linear hover:border-red-500 hover:bg-red-500 text-white py-2 px-7 rounded-full font-mono text-lg cursor-pointer"}
                        onClick={reset}>
                        Reset
                    </button>
                </div>
            </div>
        </>
    )
}

export default CounterApp