/**
 * Test al componente Home
 * 
 */
// Dependencias
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
// Componente
import { Home } from '../../components/Home/Home';

configure({ adapter: new Adapter() });

describe('Pruebas en el componente <Home />', () => {
    const wrapper = shallow(<Home />);
    const titleHome = 'Welcome to the pokédex';

    test('Debe de renderizar componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de renderizar el titulo principal', () => {
        const title = wrapper.find('h1');
        expect(title.text().trim()).toBe(titleHome);
    });

});
