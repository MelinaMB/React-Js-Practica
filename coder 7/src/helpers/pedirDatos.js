import MOCK_DATA from '../data/MOCK_DATA.json'

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        //cuerpo de la promesa
        setTimeout(() => {
            resolve(MOCK_DATA)
            // reject("Promesa rechazada")
        }, 2000)
    })

}