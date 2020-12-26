import {CounterContext} from './CounterContext';
import React from 'react';

class Child extends React.Component{
    render(){
        return(
            <div>
                <span>{this.context.count}</span>
                <button onClick={this.context.handleReset}>Reset</button>
            </div>
        )
    }
}

Child.contextType = CounterContext;

export default Child;