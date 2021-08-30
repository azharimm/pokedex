import { mount } from 'enzyme';
import Modal from '../components/Modal';

describe('Modal Component', () => {

    it('should contain hidden class when modal props is false', () => {
        const wrapper = mount(
            <Modal modal={false} success={false} id={1} name="Bulbasaur" type="Grass" image="" />
        );
        const props = wrapper.find('div').first().props();
        expect(props.className).toContain(' hidden');
    });

    it('should not contain hidden class when modal props is true', () => {
        const wrapper = mount(
            <Modal modal={true} success={false} id={1} name="Bulbasaur" type="Grass" image="" />
        );
        const props = wrapper.find('div').first().props();
        expect(props.className).not.toContain(' hidden');
    });

    it('should display failed when success is false', () => {
        const wrapper = mount(
            <Modal modal={true} success={false} id={1} name="Bulbasaur" type="Grass" image="" />
        );
        const text = wrapper.find('.text-2xl').first().text();
        expect(text).toEqual('Failed');
    });

    it('should display success when success is true', () => {
        const wrapper = mount(
            <Modal modal={true} success={true} id={1} name="Bulbasaur" type="Grass" image="" />
        );
        const text = wrapper.find('.text-2xl').first().text();
        expect(text).toEqual('Success');
    });

});