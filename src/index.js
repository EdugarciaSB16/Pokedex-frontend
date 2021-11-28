/**
 * Index de la aplicación
 * 
 */
// Dependencias
import React from 'react';
import ReactDOM from 'react-dom';
// Componentes
import { Pokedex } from './Pokedex';
// Estilos
import './styles/styles.scss';

ReactDOM.render(
    <React.StrictMode>
        <Pokedex />
    </React.StrictMode>,
    document.getElementById('root')
);