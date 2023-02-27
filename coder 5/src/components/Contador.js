import { useState } from "react"

export const Contador = () => {

    let [counter, setCounter] = useState(0)

    const handleClick = () => {
        // console.log("Click!")
        setCounter( counter + 1 )
    }  

    return (
        <div className="container my-5">
            <button onClick={handleClick} className="btn btn-primary">Click me</button>
            <p>Clicks: {counter}</p>
        </div>
    )
}

