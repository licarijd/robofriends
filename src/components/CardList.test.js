import React from 'react';

// Mount does a full DOM rendering unlike shallow. Use with tools like JSDOM. Can get complicated
// Render - renders components to HTML. SOmewhat between shallow and mount
import { shallow, mount, render } from 'enzyme';
import CardList from './CardList';
import { isTaggedTemplateExpression } from '@babel/types';

// Shallow render card component, not inner children
it('expect to render CardList component', () => {

    // jest creates a snapshot folder for snapshots
    // if the component looks different than expected, it fails
    // You can update snapshots using the terminal
    // npm test -- --coverage shows coverage
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'JohnJohn',
            email: 'john@gmail.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})