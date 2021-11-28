/**
 * Página que muestra el listado de todos los pokémons
 *
 */
// Dependencias
import React, { useEffect, useState } from 'react';
// Endpoints
import { getPokemons } from '../../../service/Endpoints';
import { PokemonItem } from '../Item/PokemonItem';
// Componentes
import { Spinner } from '../../Spinner/Spinner';
import { Link } from 'react-router-dom';
/**
 * Contenedor de la lista de pokémons
 *
 */
export const PokemonList = () => {
    // Estado donde se almacena el listado de pokémons
    const [pokemons, setPokemons] = useState({});
    // Estado donde se almecena el estado de carga
    const [loading, setLoading] = useState(true);
    // Estado donde se almacena el valor del search
    const [inputValue, setInputValue] = useState('');
    // Maneja estado del search y almacena el valor el estado
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    // Efecto que realiza la peticion y obtiene el listado de componentes
    useEffect(() => {
        getPokemons(inputValue).then((pokemon) => {
            setPokemons(pokemon);
            setLoading(false);
        });
    }, [inputValue]);

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
                        <h5>Welcome to the pokédex</h5>
                        <form>
                            <input
                                type="text"
                                name="search"
                                placeholder="Search your pokemon"
                                value={inputValue}
                                onChange={handleChange}
                            />
                        </form>
                        <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3">
                            {pokemons.map((pokemon) => (
                                <div
                                    className="col List__card-content"
                                    key={pokemon.number}
                                >
                                    <Link
                                        to={`/pokemon/${pokemon.number}`}
                                        styles={{ textDecoration: 'none' }}
                                    >
                                        <PokemonItem {...pokemon} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};
