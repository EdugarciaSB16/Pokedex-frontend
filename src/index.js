import React from 'react';
import ReactDOM from 'react-dom';
import { Pokedex } from './Pokedex';
import './styles/styles.scss';

ReactDOM.render(
    <React.StrictMode>
        <Pokedex />
    </React.StrictMode>,
    document.getElementById('root')
);