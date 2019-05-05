import React from 'react';

// Mount does a full DOM rendering unlike shallow. Use with tools like JSDOM. Can get complicated
// Render - renders components to HTML. SOmewhat between shallow and mount
import { shallow, mount, render } from 'enzyme';
import Card from './Card';
import { isTaggedTemplateExpression } from '@babel/types';

// Shallow render card component, not inner children
it('expect to render Card component', () => {

    // jest creates a snapshot folder for snapshots
    // if the component looks different than expected, it fails
    // You can update snapshots using the terminal
    // npm test -- --coverage shows coverage
    expect(shallow(<Card />)).toMatchSnapshot();
})