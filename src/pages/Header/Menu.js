import React, { Component } from 'react';

class Menu extends Component{
    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <nav>
                        <ul>
                            <li>Inicio</li>
                            <li>Sobre</li>
                            <li>Projetos</li>
                            <li>Contato</li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Menu;