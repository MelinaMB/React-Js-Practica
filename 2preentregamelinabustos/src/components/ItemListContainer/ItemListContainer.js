import './ItemListContainer.scss'
import { useEffect } from 'react'
import { useState } from 'react'
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = () => {


    const [productos, setProductos] = useState([])
    console.log(productos)

    useEffect(() => {
        pedirDatos()
            .then((response) => {
                setProductos(response)
            })
            .catch((error) => {
                console.log(error)
            })
            // .finally(() => {
            //     console.log("fin del proceso")
            // })
    }, [])



    return (
        <div className="Contenedor">
           <ItemList items={productos}/>
        </div>
    )
}