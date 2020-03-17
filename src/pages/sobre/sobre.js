import React, { Component } from 'react';
import './sobre.css'


class Sobre extends Component{
    render(){
        return(
            <div>
                <div className="container-sobre">
                    <div className="profile">
                            <img className="profile" src={require('../../assets/profile.png')} />
                    </div>

                    <div className="sobre-mim">
                        <h2>
                        - Sobre mim
                        </h2>

                        <p>
                        Lorem ipsum a massa hendrerit pellentesque purus curabitur imperdiet lectus gravida ornare eleifend, aliquet etiam neque aliquet class phasellus quisque purus ut ac. vel faucibus dui taciti orci nam fusce vestibulum eget, fermentum nisi platea justo vestibulum Lorem ipsum a massa hendrerit pellentesque purus curabitur imperdiet lectus gravida ornare eleifend, aliquet etiam neque aliquet class phasellus quisque purus ut ac. vel faucibus dui taciti orci nam fusce vestibulum eget, fermentum nisi platea justo vestibulum Lorem ipsum a massa hendrerit pellentesque purus curabitur imperdiet lectus gravida ornare eleifend, aliquet etiam neque aliquet class phasellus quisque purus ut ac. vel faucibus dui taciti orci nam fusce vestibulum eget, fermentum nisi platea justo vestibulum
                        </p>

                        <div className="button-icons">
                            <button className="buttonBorder" href="">Currículo</button>
                            <img className="icon" href="https://www.instagram.com/kaiquempo/" src={require('../../assets/instagram-icon.svg')} />
                            <img className="icon" href="https://www.linkedin.com/in/kaique-marques/" src={require('../../assets/linkedin-icon.svg')} />
                            <img className="icon"  src={require('../../assets/github-icon.svg')} />
                        </div>
                    </div>

                </div>
            </div>
                  

            
        );
    }
}

export default Sobre;