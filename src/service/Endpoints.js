/**
 * Listado de Endpoints
 * 
 */
// Dependencias
import { create } from './BaseService';

const http = create();

export const getPokemons = () => {
    return http.get('/pokemons');
};

export const getPokemon = (id) => {
    return http.get(`/pokemon/${id}`);
};