import React from 'react';

export default class ShouldComponentUpdateMethod extends React.Component{
    constructor(props){
        super(props)

        this.state={
            name: "shouldComponentUpdateMethod"
        }
    }

    shouldComponentUpdate(){
        return false //change to true and observe the difference
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({name: "componentdidmount method"})
        })
    }

    render(){
        return(
            <div>
                <p>The state is: {this.state.name}</p>
            </div>
        )
    }
}