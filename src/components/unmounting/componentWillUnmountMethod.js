import React, { Component } from 'react'

export default class ComponentWillUnmountMethod extends Component {
    constructor(props){
        super(props)
            this.state = {
                show: true,
            } 
    }
    render() {
        return (
            <div>
              {this.state.show ? <Child/> : null}
               <button className="ui orange button" onClick={() => {this.setState({show: !this.state.show})}}>Unmount/Unmount component</button>
            </div>
        )
    }
}

export class Child extends Component{
    componentWillUnmount(){
        alert('This will unmount')
    }
    render(){
        return(
            <h2 className="ui red header">
                I am a child component
            </h2>
            
        )
    }
}
