import { useNavigate } from "react-router-dom"



const ItemDetail = ({item}) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    navigate()

    return (
        <div>
            <h2>{item.nombres}</h2>
            <img src={item.img} alt={item.nombres} />
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>

            <button onClick={handleVolver}>Volver</button>
        </div>
    )
}

export default ItemDetail