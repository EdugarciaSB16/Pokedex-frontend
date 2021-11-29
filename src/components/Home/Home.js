/**
 * Home Page
 *
 */
// Dependencias
import React from 'react';
/**
 * Contenedor de la página principal
 *
 */
export const Home = () => {
    return (
        <div className="Home">
            <h1>Welcome to the pokédex</h1>

            <div>
                <a href="/pokemons" className="btn">
                    Start
                </a>
            </div>
        </div>
    );
};
