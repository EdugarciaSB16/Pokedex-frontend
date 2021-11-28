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
import { CardDetail } from './CardDetail';

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
    }, [id]);

    console.log(pokemon);

    return (
        <div className="PokemonDetail">
            <main className="Detail__main">
                {loading ? (
                    <Spinner />
                ) : (
                    <main className="flex">
                        <CardDetail {...pokemon[0]} />
                    </main>
                )}
            </main>
        </div>
    );
};
