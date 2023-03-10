

export const Navbar = () => {
    return (
        <header >
            <nav >
                <div className="imglogo">
                    {/* <!-- logo de pagina --> */}
                    <img src='/img/logo.png' alt="logonav" />

                    <h1>Kioshi Deco</h1>
                </div>
                <div>
                    <div>
                        <a>Inicio</a>
                        <a href="#Productos">Productos</a>
                        <a>Carrito</a>
                        

                    </div>
                </div>
                
            </nav>
        </header>
    )
}