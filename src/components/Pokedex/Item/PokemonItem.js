/**
 * Componente card del pokémon, obtiene los datos mediante props y
 * se renderiza en el componente lista PokemonList
 */
// Dependencias
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente card del pokémon
 *
 * @param {String} name     Nombre del pokémon
 * @param {Number} number   Id del pokémon
 * @param {Object} sprites  Objecto de imagenes del pokémon
 * @param {Array} type     Los tipos elementales del pokémon
 */
export const PokemonItem = ({ name, number, sprites, type }) => {
    return (
        <div className={`card ${type[0]}`}>
            <div className="header">
                <img src={sprites.animated} alt={name} />
            </div>
            <div className="card-body">
                <span>#{number.toString().padStart(3, '0')}</span>
                <h5>{name}</h5>
                <span>Type: {type[0]}</span>
            </div>
        </div>
    );
};

PokemonItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    sprites: PropTypes.object.isRequired,
    type: PropTypes.array.isRequired,
};
