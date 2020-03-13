import React, { Component } from 'react';
import './Header.css';

class Menu extends Component{
    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <nav>
                        <ul className="menu">
                            <li><a>Inicio</a></li>
                            <li><a>Sobre</a></li>
                            <li><a>Projetos</a></li>
                            <li><a>Contato</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Menu;