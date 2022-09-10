import React from "react";

import './styles.css';
import { Link } from "react-router-dom";
import got from '../../assets/got.jpg';
import friends from '../../assets/friends.jpg';
import code from '../../assets/code.jpg';

export default function Passatempos(){
    return (
        <div className="passatempo-container cont">
            <div className="content">
                <div className="region">
                    <div className="text">
                        <div className="main-text">Quais meus passatempos?</div>
                        <div className="soft-text">Antes da faculdade eu gostava bastante de assistir séries e jogar jogos diferentes, principalmente de história.</div>
                        <div className="soft-text">Atualmente estou terminando Game of Thrones, além de passar parte do tempo com minha família, namorada e amigos.</div>
                        <div className="soft-text">Gosto muito de programar também, é satisfatório fazer as coisas funcionarem.</div>
                    </div>
                    <Link to="/">Voltar para o inicio</Link>
                </div>

                <div className="images">
                    <img className="img" src={got} alt="" />
                    <img className="img" src={friends} alt="" />
                    <img className="img" src={code} alt="" />
                </div>
            </div>
        </div>
    );
}