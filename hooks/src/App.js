import React, {useState} from "react"

export default function App() {
        const [count, setCount] = React.useState(0)
        
        function handleMinus() {
            setCount(count-1)
        }
        
        function handlePlus() {
             setCount(count+1)
            
        }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={handleMinus}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={handlePlus}>+</button>
        </div>
    )
}