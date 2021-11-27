/**
 * Página que muestra el detalle del pokémon seleccionado
 *
 */
// Dependencias
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// Endpoints
import { getPokemon } from '../../../service/Endpoints';
// componentes
import { Spinner } from '../../Spinner/Spinner';

export const PokemonDetail = () => {
    // Estado donde se almacena el pokémon seleccionado
    const [pokemon, setPokemon] = useState({});
    // Estado donde se almecena el estado de carga
    const [loading, setLoading] = useState(true);
    // Obtiene el ID del pokémon
    const { id } = useParams();

    useEffect(() => {
        getPokemon(id).then((pokemon) => {
            setPokemon(pokemon);
            setLoading(false);
        });
    }, []);

    console.log(pokemon);

    return (
        <div className="PokemonDetail">
            <header className="List__header">
                <div className="container">
                    <h1>Pokédex</h1>
                </div>
            </header>
            <main className="container List__main">
                {loading ? (
                    <Spinner />
                ) : (
                    <main className="flex">
                        <article className="Detail__card">
                            <div className="card-header">

                            </div>
                            <div className="card-body">
                                <img
                                    src={pokemon[0].sprites.animated}
                                    alt="imagen de vitoko"
                                    className="card-body-img"
                                />
                                <h1 className="card-body-title">
                                    <span>{pokemon[0].name}</span>
                                    <h5>
                                        #
                                        {pokemon[0].number
                                            .toString()
                                            .padStart(3, '0')}
                                    </h5>
                                </h1>
                                <p className="card-body-text">London</p>
                            </div>
                            <div className="card-footer">
                                <div className="card-footer-social">
                                    <h3>80K</h3>
                                    <p>Followers</p>
                                </div>
                                <div className="card-footer-social">
                                    <h3>803K</h3>
                                    <p>Likes</p>
                                </div>
                                <div className="card-footer-social">
                                    <h3>1.4K</h3>
                                    <p>Photos</p>
                                </div>
                            </div>
                        </article>
                    </main>
                )}
            </main>
        </div>
    );
};
