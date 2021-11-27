/**
 * App router
 * 
 */
// Dependencias
import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
// Componenentes
import { Home } from '../components/Home/Home';
import { PokemonDetail } from '../components/Pokedex/Detail/PokemonDetail';
import { PokemonList } from '../components/Pokedex/List/PokemonList';

/**
 * Enrutador de la app
 * 
 */
export const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemons" component={PokemonList} />
            <Route exact path="/pokemon/:id" component={PokemonDetail} />
        </Switch>
    );
};
