import React, { Component } from 'react';
import Typical from 'react-typical'
import './inicio.css'


class Inicio extends Component{
    render(){
        return(
            <div>
                <div className="container-inicio">
                    <div id="leftItems">   
                    <Typical
                        steps={["< Hello i'm />", 3000, '< Olá, meu nome é />', 5000]}
                        loop={Infinity}
                        wrapper="p"
                        className="saudacao"
                    />
                        <h2> Kaique Marques </h2>
                        <h3>UX/UI Designer and Front end developer</h3>
                        <p>Lorem ipsum a massa hendrerit pellentesque purus curabitur 
                            imperdiet lectus gravida ornare eleifend, aliquet etiam 
                            neque aliquet class phasellus quisque purus ut ac. vel 
                            faucibus dui taciti orci nam fusce vestibulum eget, 
                            fermentum nisi platea justo vestibulum
                        </p>

                        <button className="buttonSolid" href=""><span className="icon"></span>Projetos</button>
                        <button className="buttonBorder" href=""><span className="icon"></span>Contato</button>

                        
                    </div>

                    <div >
                    <img className="illustration" src={require('../../assets/Ilustracao-inicio.svg')} />                        
                    </div>
                </div>

                <div className="scroll">
                        <img src={require('../../assets/scroll.svg')} />
                </div>

            </div>

            
        );
    }
}

export default Inicio;