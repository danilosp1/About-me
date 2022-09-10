import React from "react";

import './styles.css';
import { Link } from "react-router-dom";
import { FiInstagram, FiLinkedin, FiGithub, FiLayout } from "react-icons/fi";
export default function Passatempos(){
    return (
        <div className="social-container cont">
            <div className="content">
                <div className="text">
                        <div className="main-text">Redes sociais</div>
                </div>
                <div className="links">
                    <a href="https://www.instagram.com/dan.sp1/?hl=pt-br">
                        <FiInstagram size={16}/>
                        <span>Instagram</span>
                    </a>
                    <a href="https://www.linkedin.com/in/danilo-da-silva-pinto-5632b11aa/">
                        <FiLinkedin size={16}/>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/danilosp1">
                        <FiGithub size={16}/>
                        <span>GitHub</span>
                    </a>
                    <a href="https://danilosilvaportfolio.netlify.app/">
                        <FiLayout size={16}/>
                        <span>Site</span>
                    </a>
                    <Link to="/">Voltar para o inicio</Link> 
                </div>
            </div>
        </div>
    );
}