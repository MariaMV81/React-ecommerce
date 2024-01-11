import './Header.css'
import logoDeveloper2 from '../../assets/img/logoDeveloper2.png';
import searchIcon from '../../assets/icon/searchIcon.png'; 

export default function Header() {
    return (
        <header className="container-header">
            <div className="logo-container">
                <img src={logoDeveloper2} alt="Logo" className="logo" />
                
            </div>
            <nav className="nav-bar">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Acerca de</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
            <div className="search-container">
                <div className="search-wrapper">
                    <input type="text" placeholder="Buscar..." />
                    <button className="search-button"><img src={searchIcon} alt="Buscar" /></button>
                </div>
            </div>
            <button className="login-button">Iniciar sesión</button>
        </header>
    );
}