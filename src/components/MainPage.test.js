import React from 'react';
//TODO

// Mount does a full DOM rendering unlike shallow. Use with tools like JSDOM. Can get complicated
// Tests connected component App.js essentially
// Render - renders components to HTML. SOmewhat between shallow and mount
import { shallow, mount, render } from 'enzyme';
import MainPage from './MainPage';
import { isTaggedTemplateExpression } from '@babel/types';

let wrapper;

// Run before each test
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage { ...mockProps}/>)
})

it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'john',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage { ...mockProps2}/>)
    expect(wrapper2.instance().filteredRobots()).toEqual([{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
    }]);
})

it('filters robots correctly 2', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    }
    const filteredRobots = [];
    const wrapper3 = shallow(<MainPage { ...mockProps3}/>)
    expect(wrapper3.instance().filteredRobots()).toEqual(filteredRobots);
})