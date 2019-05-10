import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from './constants.js';

 import * as reducers from './reducers';

 // Reducers are the controllers of the app, they update the state!
 // So very important to test
 describe('searchRobots', () => {
     const initialStateSearch = {
         searchField: ''
     }
     it('should return initial state', () => {
         expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: ''});
     })

     it('should return CHANGE_SEARCH_FIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({ searchField: 'abc'});
    })
 })

 describe('requestRobots', () => {
     const initialStateRobots = {
         error: '',
         robots: [],
         isPending: false
     }

     it('should return the initial state', () => {
         expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
     })

     it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            error: '',
            robots: [],
            isPending: true
        })
    })

    it('should handle REQUEST_ROBOTS_SUCCESS', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }]
        })).toEqual({
            error: '',
            robots: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }],
            isPending: false
        })
    })
 })