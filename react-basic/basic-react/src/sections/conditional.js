import React, {Component} from 'react';

class ComponentA extends Component {
    render() {
        return <p>Component A</p>
    }
}

class ComponentB extends Component {
    render() {
        return <p>Component B</p>
    }
}

export default class ConditionalSection extends Component {
    constructor() {
        super()
        this.state = { showA : false }
    }
    render() {
        return (
            <div>
                <h4>Conditional Rendering</h4>
                {this.state.showA ? <ComponentA/> : <ComponentB/>}
            </div>
        )
    }
}