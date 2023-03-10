

const Item = ( {item} ) => {

    return (
        <div>
            <img src={item.img} alt={item.nombre} />
            <h4>{item.nombre}</h4>
            <p>{item.descripcion}</p>
            <p>Precio:${item.precio}</p>
            <button>Ver Mas</button>
        </div>
        )
    
}

export default Item