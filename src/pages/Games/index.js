import React from "react";

import './styles.css';
import kat from '../../assets/katarina.jpg';
import irelia from '../../assets/irelia.jpg';
import akali from '../../assets/akali.jpg';
import { Link } from "react-router-dom";

export default function Games(){
    return (
        <div className="game-container cont">
            <div className="content">
                <div className="region">
                    <div className="text">
                        <div className="main-text">O que eu jogo?</div>
                        <div className="soft-text">Resumindo, infelizmente sou dominado pelo vício criado pela Riot Games. Sim, fazem aproximadamente 6 anos que eu jogo isso e ainda sou prata, be like</div>
                        <div className="soft-text">Meus mains são esses dai do lado :D, se não conhecer, agradeça todos os dias por isso.</div>
                        <div className="soft-text">Enfim, mas fora isso eu jogo de tudo, principalmente alguns como Stardew Valley</div>
                    </div>
                    <Link to="/">Voltar para o inicio</Link>
                </div>

                <div className="images">
                    <img className="img" src={akali} alt="akali" />
                    <img className="img" src={kat} alt="katarina" />
                    <img className="img" src={irelia} alt="irelia" />
                </div>
            </div>
        </div>
    );
}