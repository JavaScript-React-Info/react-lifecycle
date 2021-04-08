import React from 'react';

export default class ComponentDidUpdateMethod extends React.Component{
    constructor(props){
        super(props)

        this.state={
            name:"previous state"
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({name:"current state"})
        },5000)
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.name !== this.state.name){
            document.getElementById('state').innerHTML = "The state is changed and componentdidupdate is invoked after the update into dom"
        }
    }

    render(){
        return(
            <div>
                This is: {this.state.name}
                <p id="state"></p>
            </div>
        )
    }
}