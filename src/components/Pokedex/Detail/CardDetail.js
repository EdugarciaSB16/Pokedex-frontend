/**
 * Componente card que se renderiza en la vista detalle
 *
 */
// Dependencias
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
/**
 * Componente card que se renderiza en la vista detalle
 *
 * @param {String} name              Nombre del pokémon
 * @param {Object} sprites           Objecto de imagenes del pokémon
 * @param {Number} number            Id del pokémon
 * @param {Object} type              Los tipos elementales del pokémon
 * @param {Number} hp                Salud del pokémon
 * @param {Number} attack            Puntos de ataque del pokémon
 * @param {Number} defense           Puntos de defense del pokémon
 * @param {Number} speed             Puntos de speed del pokémon
 * @param {Number} total             Puntos totales del pokémon
 * @param {Array} prev_evolution    Evolución anterior del del pokémon
 * @param {Array} next_evolution    Evolución siguiente del del pokémon
 */
export const CardDetail = ({
    name,
    sprites,
    number,
    type,
    hp,
    attack,
    defense,
    speed,
    total,
    prev_evolution,
    next_evolution,
}) => {
    return (
        <article className="Detail__card">
            <div className={`Detail__card-header ${type[0]}`}>
                <Link to="/pokemons">
                    <img src="/img/left.png" style={{height:'50px'}} alt="arrow" />
                </Link>
            </div>
            <div className="Detail__card-body">
                <img
                    src={sprites.animated}
                    alt={name}
                    className="Detail__card-body-img"
                />
                <div className="Detail__card-body-title">
                    <h5>#{number.toString().padStart(3, '0')}</h5>
                    <span>{name}</span>
                </div>
                <p className="Detail__card-body-text">Type: {type[0]}</p>
            </div>
            <div className="container Detail__card-footer mt-1 mb-4">
                <label htmlFor="file">Hp:</label>
                <progress id="file" value={hp} max="100" />
                <label htmlFor="file">Attack:</label>
                <progress id="file" value={attack} max="100" />
                <label htmlFor="file">Defense:</label>
                <progress id="file" value={defense} max="100" />
                <label htmlFor="file">Speed:</label>
                <progress id="file" value={speed} max="100" />
                <label htmlFor="file">Total:</label>
                <progress id="file" value={total} max="1000" />
            </div>
            <div className="container mt-1 mb-4">
                <div className="Detail__card-evolutions">
                    {prev_evolution.length > 0 && (
                        <Link to={`/pokemon/${prev_evolution[0].number}`}>
                            <div className="mt-2">
                                <h5>Prev evolution</h5>
                                <img
                                    src={prev_evolution[0].img}
                                    alt={prev_evolution[0].name}
                                />
                            </div>
                        </Link>
                    )}
                    {next_evolution.length > 0 && (
                        <Link to={`/pokemon/${next_evolution[0].number}`}>
                            <div className="mt-2">
                                <h5>Next evolution</h5>
                                <img
                                    src={next_evolution[0].img}
                                    alt={next_evolution[0].name}
                                />
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </article>
    );
};

CardDetail.propTypes = {
    name: PropTypes.string.isRequired,
    sprites: PropTypes.object.isRequired,
    number: PropTypes.number.isRequired,
    type: PropTypes.array.isRequired,
    hp: PropTypes.number.isRequired,
    attack: PropTypes.number.isRequired,
    defense: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    prev_evolution: PropTypes.array.isRequired,
    next_evolution: PropTypes.array.isRequired,
};
