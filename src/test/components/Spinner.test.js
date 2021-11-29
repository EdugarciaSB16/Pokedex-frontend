/**
 * Test al componente spinner
 * 
 */
// Dependencias
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
// Componentes
import { Spinner } from '../../components/Spinner/Spinner';

configure({ adapter: new Adapter() });

describe('Pruebas en el componente <Spinner />', () => {
    test('Debe de renderizar el componente correctamente', () => {
        const wrapper = shallow(<Spinner />);
        expect(wrapper).toMatchSnapshot();
    });
});