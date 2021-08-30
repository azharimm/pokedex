import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar Component', () => {

    const getWrapper = () => mount(
        <Router>
            <Navbar />
        </Router>
    );
    const wrapper = getWrapper();

    it('should display Pokedex title', () => {
        const text = wrapper.find('span').first().text();
        expect(text).toEqual('Pokedex');
    });
    it('should display a logo', () => {
        const props = wrapper.find('img').first().props();
        expect(props.src).toEqual('logo.svg');
    });
    it('should display My Pokemon Button', () => {
        const text = wrapper.find('Link').last().text().trim();
        expect(text).toEqual('My Pokemon');
    });
});