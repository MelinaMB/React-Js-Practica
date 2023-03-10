import './ItemListContainer.scss'
import { useEffect } from 'react'
import { useState } from 'react'


const MOCK_DATA = [
    {
        id:1,
        name: "producto 1",
        description: "jdjdjfj",
        price: 1220,
        img: "https://"
    },
    {
        id:2,
        name: "producto 1",
        description: "jdjdjfj",
        price: 1220,
        img: "https://"
    },

]

const pedirDatos = () => {
   return new Promise ((resolve, reject) => {
    //cuerpo de la promesa
    setTimeout (() => {
        resolve(MOCK_DATA)
        // reject("Promesa rechazada")
    },2000)
})

}

export const ItemListContainer = () => {


    const [productos, setProductos] = useState([])
    console.log(productos)
    
    useEffect(() => {
        pedirDatos()
        .then ((response) => {
            setProductos(response)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(()=> {
            console.log("fin del proceso")
        })
    }, [])

    

    return (
        <div className= "Contenedor">
            <h2>Item List container</h2>
            <hr />
            { productos.map((el) => <h4>{el.name}</h4>)}
        </div>
    )
}