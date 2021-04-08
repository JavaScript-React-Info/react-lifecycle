import React from 'react';

export class ChildComponent extends React.Component{
    constructor(props){
        super(props)

        this.state={
            name:"Constructor Method"
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log(props)
        return {name: props.nameFromParent}
    }

    render(){
        return(
            <div>
                This is {this.state.name}
            </div>
        )
    }
}

export default class GetDerivedStateFromPropsMethod extends React.Component{
    render(){
        return(
            <ChildComponent nameFromParent="getDerivedStateFromPropsMethod"/>
        )
    }
}