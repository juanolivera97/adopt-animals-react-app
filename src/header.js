import React from 'react';

class Header extends React.Component {
    renderButton = (title, section) => {
        return (
            <a onClick={() => this.props.navigateTo(section)}>
                {title}
            </a>
        )
    }

    render() {
        return (
            <div className="logo">
                <header>
                    <div className="container">
                        <h1 className="icon-guidedog">Terranimal</h1>
                        <input type="checkbox" name="" id="menu-bar" />
                        <label className="icon-menu" htmlFor="menu-bar"></label>
                        <nav className="menu">
                            {this.renderButton('Home', 'home')}
                            {this.renderButton('Registro Animal', 'new-animal')}
                        </nav>
                    </div>
                </header>
            </div>
        )
    }
}
export default Header;