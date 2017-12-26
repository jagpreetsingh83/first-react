import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import HelloWorld from './HelloWorld';

describe(HelloWorld, () => {
    /*
    I usually like to tackle my React tests in the following way
    1.  Write a generic snapshot test
    2.  Write some sub-component-specific tests
    3.  Check content
    4.  Check interactions. Given that, let’s start tackling these in order.
    */
    const name = 'Person';
    const mockRemoveGreeting = jest.fn();
    const component = shallow(<HelloWorld name={name} removeGreeting={mockRemoveGreeting}/>);

    // Writing A Generic Snapshot Test
    it('renders and matches our snapshot', () => {
        const component = renderer.create(<HelloWorld name="Person"/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    // Writing Content Tests
    it('contains the supplied name', () => {
        expect(component.text()).toContain(name);
    });
    // Checking Interactions
    it('modifies the greeting when frenchify button is clicked', () => {
        component
            .find('Button.french')
            .simulate('click');
        expect(component.text()).toContain('Bonjour');
    });
    it("calls the passed in removeGreeting function when remove button is clicked", () => {
        component
            .find("Button.delete")
            .simulate("click");
        expect(mockRemoveGreeting).toBeCalled();
    });
});