import React from 'react';



class Header extends React.Component {
    render() {
        return (
            <div className="logo">
                <header>
                    <div className="container">
                        <h1 className="icon-guidedog">Terranimal</h1>
                        <input type="checkbox" name="" id="menu-bar" />
                        <label className="icon-menu" for="menu-bar"></label>
                        <nav className="menu">
                            <a href="#">Home</a>
                            <a href="newAnimal.html">Registro Animal</a>
                            <a href="list.html">Lista de animales</a>
                            <a href="#">Adoptar</a>
                            <a href="#">Contacto</a>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }
}
export default Header;