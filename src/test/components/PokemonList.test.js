/**
 * Test al componente PokemonList
 *
 */
// Dependencias
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
// Componentes
import { PokemonList } from '../../components/Pokedex/List/PokemonList';

configure({ adapter: new Adapter() });

describe('Pruebas en el componente PokemonList', () => {
    const wrapper = shallow(<PokemonList />);

    test('Debe de renderizar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

});
