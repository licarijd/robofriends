import React, { Component, PureComponent } from 'react';

// PureComponents only rerender when it's props change
// Same effect as shouldComponentUpdate
class CounterButton extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    // Prevents component from being rendered when a parent element is rendered
    // component only rendered when the count variable is going to increase
    // supports performance - less renders
    // Extra call so use with caution
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }

    updateCount = () => {
        // Not recommended to update state based on current state since state updates are asynchronous
        // this.setState({count: this.state.count + 1});
        this.setState(state => {
            return {count: state.count + 1}
        })
    }

    render() {
        return (
            <button id='counter' color={this.props.color} onClick={this.updateCount} >
                Count: {this.state.count}
            </button>
        )
    }
}

export default CounterButton;