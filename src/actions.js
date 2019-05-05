import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from './constants.js';

export const setSearchField = (text) => ({
        type: CHANGE_SEARCH_FIELD,
        payload: text
})

// Uses thunk - dispatch provided to second order function
// Usually an object is expected, but here the middleware detects a function, dispatches pending, and then waits for
// a success or fail
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => dispatch ({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
            .catch(error => dispatch ({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}