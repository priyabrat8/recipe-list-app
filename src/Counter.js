import React, {Component} from 'react';


export default class Counter extends Component {
    constructor(props){
        super(props)

        this.state = {
           count: props.intialCount
        }
    }

    render() {
        return (
            <div>
            <button onClick={() => this.changeCount(-1)}>-</button>
            <span>{this.state.count}</span>
            <button onClick={() => this.changeCount(1)}>+</button>
          </div>
        )
    }

    changeCount(amount) {
        this.setState(prevState => { return {count: prevState.count + amount }})
        // this.setState({count: this.state.count + amount})
    }
}