import React from 'react';
//TODO

// Mount does a full DOM rendering unlike shallow. Use with tools like JSDOM. Can get complicated
// Render - renders components to HTML. SOmewhat between shallow and mount
import { shallow, mount, render } from 'enzyme';
import CounterButton from './CounterButton';
import { isTaggedTemplateExpression } from '@babel/types';

// Shallow render card component, not inner children
it('expect to render App component', () => {

    const mockColor = 'red';
    // jest creates a snapshot folder for snapshots
    // if the component looks different than expected, it fails
    // You can update snapshots using the terminal
    // npm test -- --coverage shows coverage
    expect(shallow(<App color={mockColor} />)).toMatchSnapshot();
})

it('correctly increments counter', () => {

    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />);

    // Checks what the state should be after simulating a click on a component
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 1});
    expect(wrapper.props().color).toEqual('red')
})