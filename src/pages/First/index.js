import React from "react";
import { Link } from "react-router-dom";

import './styles.css';

export default function First(){
    return (
        <div className="first-container cont">
            <div className="content">
                <div className="text">
                    <div className="main-text">Olá, meu nome é <span>Danilo</span></div>
                    <div className="soft-text">Descubra sobre mim</div>
                </div>

                <div className="buttons">  
                    <Link to="/games">Jogos</Link>
                    <Link to="/passatempos">Passatempos</Link>
                    <Link className="social" to="/social">Redes Sociais</Link>
                </div>
            </div>
        </div>
    );
}