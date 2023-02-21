
// export const Propiedades = (props) => {

//     console.log(props)

//     return (
//         <article>
            
//             <h2>Nombre: {props.nombre} </h2>
//             <h3>Curso: {props.curso} </h3>
//             <hr/>
//         </article>
//     );
// }


// export const Propiedades = (props) => {

//     const { nombre, curso, edad } = props

//     return (
//         <article>
            
//             <h2>Nombre: {props.nombre} </h2>
//             <h3>Curso: {props.curso} </h3>
//             <hr/>
//         </article>
//     );
// }

export const Propiedades = ( {nombre, curso, edad } ) => {

    return (
        <article>
            
            <h2>Nombre: {nombre} </h2>
            <h3>Curso: {curso} </h3>
            <h4>Edad: {edad} </h4>
            <hr/>
        </article>
    );
}