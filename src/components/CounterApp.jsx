import React, { useState, useEffect } from "react";
import { Tooltip } from 'react-tooltip';
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
            <div className="flex justify-center items-center py-50">
                <div className="max-w-[1140px] px-4 mx-auto flex flex-col justify-center items-center">
                    <div className="font-mono text-3xl">{count}</div>
                    <div className="gap-4 flex justify-center items-center mt-4">
                        <div
                            data-tooltip-id="counter-tooltip"
                            data-tooltip-content="Decrease the counter" >
                            <Button onClick={decrement} text="Decrease" />
                        </div>
                        <div
                            data-tooltip-id="counter-tooltip-2"
                            data-tooltip-content="Increase the counter"
                        >
                            <Button onClick={increment} text="Increase" />
                        </div>
                    </div>
                    <div
                        data-tooltip-id="counter-tooltip"
                        data-tooltip-content={count === 0 ? "Counter is already zero" : "Reset the counter"}
                    >
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
            </div>
            <Tooltip className="font-mono text-base font-bold" id="counter-tooltip" place="left" effect="solid" />
            <Tooltip className="font-mono text-base font-bold" id="counter-tooltip-2" place="right" effect="solid" />
        </>
    )
}

export default CounterApp;
