/**
 * Listado de Endpoints
 * 
 */
// Dependencias
import { create } from './BaseService';

const http = create();

export const getPokemons = (name) => {
    return http.get('/pokemons', { params: { name: name } });
};

export const getPokemon = (id) => {
    return http.get(`/pokemon/${id}`);
};