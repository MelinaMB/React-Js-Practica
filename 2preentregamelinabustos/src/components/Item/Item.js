import { Link } from "react-router-dom"

const Item = ( {item} ) => {

    return (
        <div>
            <img src={item.img} alt={item.nombres} />
            <h4>{item.nombres}</h4>
            <p>{item.descripcion}</p>
            <p>Precio:${item.precio}</p>
            <Link to={`/detail/${item.id}`}>Ver Mas</Link>
        </div>
        )
    
}

export default Item