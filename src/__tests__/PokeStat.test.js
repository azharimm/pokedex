import { mount } from 'enzyme';
import PokeStat from '../components/PokeStat';

describe('PokeStat Component', () => {

    const getWrapper = () => mount(
        <table>
            <tbody>
                <PokeStat name="hp" stat={60} />
            </tbody>
        </table>
    );
    const wrapper = getWrapper();

    it('should display stat name', () => {
        const text = wrapper.find('td').first().text();
        expect(text).toEqual('hp');
    });

    it('should display stat value', () => {
        const text = wrapper.find('td').last().text();
        expect(text).toEqual("60");
    });

});