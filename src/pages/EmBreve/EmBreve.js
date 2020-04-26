import React, { Component } from 'react';
import Typical from 'react-typical'
import './EmBreve.css'


class EmBreve extends Component{
    render(){
        return(
            <main className="container-inicio">
                    <section className="hero container-inicio">   
                     <Typical
                            steps={["< Hello, my name is />", 3000, '< Olá, meu nome é />', 5000]}
                            loop={Infinity}
                            wrapper="p"
                            className="saudacao"
                        />
                        
                        <h3> Kaique Marques </h3>
                        <h4>UX/UI Designer and Front end developer</h4>
                        <p>Ainda estamos em construindo o site, por enquanto me encontre nas redes sociais abaixo ou mande um email para: <br/> <a id="email">artes.kaiquemarques@hotmail.com</a> </p>         
                        <div className="button">
                            <a href="https://www.behance.net/KaiqueMarques" target="_blank" rel="noopener noreferrer">
                                <button className="buttonSolid" ><span className="icon"></span>Projetos</button>

                                <div className="button-icons">

                                    <a id="linkIcon" href="https://www.linkedin.com/in/kaique-marques/" target="_blank">
                                        <img className="icon"  src={require('../../assets/linkedin-icon.svg')} />
                                    </a>
                                    
                                    <a id="instaIcon" href="https://www.instagram.com/kaiquempo/" target="_blank">
                                        <img className="icon"  src={require('../../assets/instagram-icon.svg')} />
                                    </a>
                                    
                                    <a href="https://github.com/KaiqueMP" target="_blank">
                                        <img className="icon"  src={require('../../assets/github-icon.svg')} />
                                    </a>
                                </div>
                            </a>

                            
                        </div>               
                    </section>

                

            </main>

            
        );
    }
}

export default EmBreve;