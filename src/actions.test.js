// Use nock, supertest for mock URL calls

import * as actions from './actions';

import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from './constants.js';

 import configureMockStore from 'redux-mock-store';
 import thunkMiddleware from 'redux-thunk';

 export const mockStore = configureMockStore([thunkMiddleware])

it('should create an action to search robots', () => {
    const text = 'woooo';
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction);
})

it('handles requesting robots API', () => {
    const store = mockStore();

    //dispatch the action
    store.dispatch(actions.requestRobots());
    const action = store.getActions();

    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING
    }

    // Check the dispatched action is expected
    expect(action[0]).toEqual(expectedAction);
})