import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import First from './pages/First';
import Games from './pages/Games';
import Passatempos from './pages/Passatempos';
import Social from './pages/Social';

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<First/>} />
                <Route path='/games' element={<Games/>} />
                <Route path='/passatempos' element={<Passatempos/>} />
                <Route path='/social' element={<Social/>} />
            </Routes>
        </BrowserRouter>
    );
}