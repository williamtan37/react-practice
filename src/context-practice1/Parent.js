import {CounterContext} from './CounterContext';
import React from 'react';
import Child from './Child';

class Parent extends React.Component{
    constructor(){
        super();

        this.state = {
            count: 0,
            handleReset: this.handleReset,
        }
    }
     
    handleReset = () => {
        this.setState({count: 0})
    }

    handleClick = () => {
        this.setState(prevState => (
            {count: prevState.count + 1})
        );
    }

    render() {
        return(
        <div>
            <button onClick={this.handleClick}>Click here</button>
            <CounterContext.Provider value={this.state}>
                <Child/>
                <Child/>
                <Child/>
            </CounterContext.Provider>
        </div>
        );
    }
}

export default Parent;