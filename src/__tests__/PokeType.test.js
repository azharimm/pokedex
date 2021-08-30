import { mount } from 'enzyme';
import PokeType from '../components/PokeType';

describe('PokeType Component', () => {

    const getWrapper = () => mount(
            <PokeType name="Grass" />
    );
    const wrapper = getWrapper();

    it('should display Grass as pokemon type', () => {
        const text = wrapper.find('span').first().text();
        expect(text).toEqual('Grass');
    });

    it('should contain bg-green as background', () => {
        const props = wrapper.find('span').first().props();
        expect(props.className).toContain('bg-green');
    });

});