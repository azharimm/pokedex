import { mount } from 'enzyme';
import PokeMove from '../components/PokeMove';

describe('PokeMove Component', () => {

    const getWrapper = () => mount(
        <PokeMove name="gattling-gun" />
    );
    const wrapper = getWrapper();

    it('should display move name', () => {
        const text = wrapper.find('span').first().text();
        expect(text).toEqual('#gattling-gun');
    });

});