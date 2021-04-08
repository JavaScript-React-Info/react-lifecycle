import React from 'react';

export default class ConstructorMethod extends React.Component{
    constructor(props){
        super(props)

        this.state={
            name: "Constructor Method"
        }
    }

    render(){
        return(
            <div>
                <p>This is {this.state.name}</p>
            </div>
        )
    }
}
