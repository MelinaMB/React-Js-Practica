import { Link } from 'react-router-dom'


export const Navbar = () => {
    return (
        <header >
            <nav >
                <div className="imglogo">
                    {/* <!-- logo de pagina --> */}
                    <Link to="/">
                        <img src='/img/logo.png' alt="logonav" />
                    </Link>

                    <h1>Kioshi Deco</h1>
                </div>
                <div>
                    <div>
                        <Link to="/">Inicio</Link>
                        <Link to="/productos/bano">Baño</Link>
                        <Link to="/productos/cocina">Cocina</Link>
                        <Link to="/productos/dormitorio">Dormitorio</Link>
                        <Link to="/productos/living">Living</Link>
                        <Link to="/productos/oficina">Oficina</Link>
                        <Link to="/productos/comedor">Comedor</Link>
                    </div>
                </div>

            </nav>
        </header>
    )
}