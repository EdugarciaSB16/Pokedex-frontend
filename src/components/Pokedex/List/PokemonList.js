/**
 * Página que muestra todos los pokémons
 *
 */
// Dependencias
import React, { useEffect, useState } from 'react';
// Endpoints
import { getPokemons } from '../../../service/Endpoints';
import { PokemonItem } from '../Item/PokemonItem';
// Componentes
import { Spinner } from '../../Spinner/Spinner';
/**
 * Contenedor de la lista de pokémons
 *
 */
export const PokemonList = () => {
    // Estado donde se almacena el listado de pokémons
    const [pokemons, setPokemons] = useState({});
    // Estado donde se almecena el estado de carga
    const [loading, setLoading] = useState(true);

    // Efecto que realiza la peticion y obtiene el listado de componentes
    useEffect(() => {
        getPokemons().then((pokemon) => {
            setPokemons(pokemon);
            setLoading(false);
        });
    }, []);

    return (
        <div className="PokemonList">
            <header className="List__header">
                <div className="container">
                    <h1>Pokédex</h1>
                </div>
            </header>
            <main className="container List__main">
                {loading ? (
                    <Spinner />
                ) : (
                    <div className="container mt-5 animate__animated animate__fadeIn">
                        <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3">
                            {pokemons.map((pokemon) => (
                                <div className="col List__card-content" key={pokemon.number}>
                                    <PokemonItem {...pokemon} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};
