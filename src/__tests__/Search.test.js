import { mount, shallow } from 'enzyme';
import Search from '../components/Search';

describe('Search Component', () => {
    const mockSetQuery = jest.fn();
    const mockHandleSearch = jest.fn();
    const getWrapper = () => shallow(<Search query="" setQuery={() => mockSetQuery()} handleSearch={() =>mockHandleSearch()} />);
    const wrapper = getWrapper();

    it('should display empty query in the input search field', () => {
        const props = wrapper.find('input').first().props();
        expect(props.value).toEqual('');
    });

    it('should invoke setQuery Callback function', () => {
        const el = wrapper.find('input').first();
        el.simulate('change', { target: { value: 'Pikachu' } });
        expect(mockSetQuery).toHaveBeenCalled();
    });

    it('should invoke handleSearch Callback function', () => {
        const el = wrapper.find('form').first();
        el.simulate('submit');
        expect(mockHandleSearch).toHaveBeenCalled();
    });

});