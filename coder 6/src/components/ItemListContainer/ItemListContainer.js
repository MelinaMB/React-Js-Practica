import './ItemListContainer.scss'

const MOCK_DATA = [
    {
        id:1,
        name: "producto 1",
        description: "jdjdjfj",
        price: 1220,
        img: "https://"
    },
    {
        id:1,
        name: "producto 1",
        description: "jdjdjfj",
        price: 1220,
        img: "https://"
    },

]

export const ItemListContainer = () => {

    const promesa = new Promise ((resolve, reject) => {
        //cuerpo de la promesa
        setTimeout (() => {
            resolve(MOCK_DATA)
            // reject("Promesa rechazada")
        },2000)
    })

    promesa
    .then ((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(()=> {
        console.log("fin del proceso")
    })

    

    return (
        <div className= "Contenedor">
            <h2>Item List container</h2>
            <hr />
            
        </div>
    )
}