import { useState, useEffect } from "react"

export const Contador = () => {

    const [counter, setCounter] = useState(0)

    const [hola, setHola] = useState(true)
    
    const handleClick = () => {
        // console.log("Click!")
        setCounter( counter + 1 )
    }  

    const handleHola = () => {
        setHola(!hola)
    }

    useEffect(() => {
        //efecto de montaje
        console.log("Componente montado")
    }, [])

    useEffect(() => {

        if (counter % 10 === 0)
        //efecto de actualizado
        console.log("Componente actualizado")
        //efecto con dependencia
    }, [counter])


    return (
        <div className="container my-5">
            <button onClick={handleClick} className="btn btn-primary">Click me</button>
            <p>Clicks: {counter}</p>
            <hr />

            <p>FyH: {new Date().toLocaleTimeString()}</p>

            <hr/>
            <button onClick={handleHola} className="btn btn-success" >
                {hola ? "hola mundo" : "chau mundo"}
            </button>
        </div>
    )
}

