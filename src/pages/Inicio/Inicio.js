import React, { Component } from 'react';
import Typical from 'react-typical'
import './inicio.css'


class Inicio extends Component{
    render(){
        return(
            <main className="container-inicio">
                    <section className="hero container-inicio">   
                        <Typical
                            steps={["< Hello i'm />", 3000, '< Olá, meu nome é />', 5000]}
                            loop={Infinity}
                            wrapper="p"
                            className="saudacao"
                        />
                        <h3> Kaique Marques </h3>
                        <h4>UX/UI Designer and Front end developer</h4>
                        <p>Lorem ipsum a massa hendrerit pellentesque purus curabitur 
                            imperdiet lectus gravida ornare eleifend, aliquet etiam 
                             
                            
                        </p>                        
                    </section>

                <div className="button">
                    <button className="buttonSolid" href=""><span className="icon"></span>Projetos</button>
                    <button className="buttonBorder" href=""><span className="icon"></span>Contato</button>
                </div>

                <div className="illustration">
                    <figure>
                        <img src={require('../../assets/Ilustracao-inicio.svg')} alt="Kaique Illustration" />
                    </figure>
                </div>

                <div className="scroll">
                    <img src={require('../../assets/scroll.svg')} />
                </div>

            </main>

            
        );
    }
}

export default Inicio;