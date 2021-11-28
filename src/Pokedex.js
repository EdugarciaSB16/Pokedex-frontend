/**
 * Componente principal de la aplicación
 * 
 */
// Dependecias
import React from 'react';
// Componentes
import { AppRouter } from './routers/AppRouter';

export const Pokedex = () => {
    return (
        <>
            <AppRouter />
        </>
    );
};
