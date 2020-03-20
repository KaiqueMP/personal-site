import React, { Component } from 'react';
import './sobre.css'


class Sobre extends Component{
    render(){
        return(
            <div id="main" className="container-sobre">
                
                    <div className="profile-img">
                        <figure>
                            <img className="profile" src={require('../../assets/profile.png')} alt="Foto do Kaique" />
                        </figure>
                    </div>
                    
                <section className="hero container">
                    <div className="sobre-mim">
                        <h2>
                        - Sobre mim
                        </h2>

                        <p>
                        Lorem ipsum a massa hendrerit pellentesque purus curabitur imperdiet lectus gravida ornare eleifend, aliquet etiam neque aliquet class phasellus quisque purus ut ac. vel faucibus dui taciti orci nam fusce vestibulum eget, fermentum nisi platea justo vestibulum Lorem ipsum a massa hendrerit pellentesque purus curabitur imperdiet lectus gravida ornare eleifend, aliquet etiam neque aliquet class phasellus quisque purus ut ac. vel faucibus dui taciti orci nam fusce vestibulum eget, fermentum nisi platea justo vestibulum Lorem ipsum a massa hendrerit pellentesque purus curabitur imperdiet lectus gravida ornare eleifend, aliquet etiam neque aliquet class phasellus quisque purus ut ac. vel faucibus dui taciti orci nam fusce vestibulum eget, fermentum nisi platea justo vestibulum
                        </p>
                    </div>

                    
                </section>

                <div className="button-icons">
                        <a id="instaIcon" href="https://www.instagram.com/kaiquempo/" target="_blank">
                            <img className="icon"  src={require('../../assets/instagram-icon.svg')} />
                        </a>
                        <a id="linkIcon" href="https://www.linkedin.com/in/kaique-marques/" target="_blank">
                            <img className="icon"  src={require('../../assets/linkedin-icon.svg')} />
                        </a>
                        <a href="https://github.com/KaiqueMP" target="_blank">
                            <img className="icon"  src={require('../../assets/github-icon.svg')} />
                        </a>
                </div>

                <div className="button-sobre">
                    <button className="buttonBorder-sobre" href="">Currículo</button>
                </div>

                   

                
            </div>
                  

            
        );
    }
}

export default Sobre;