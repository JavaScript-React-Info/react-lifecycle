import React from 'react';

export default class GetSnapshotBeforeUpdateMethod extends React.Component{
    constructor(props){
        super(props)

        this.state={
            name:"constructor method"
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({name:"componentdidmount method"})
        },5000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById('prevstate').innerHTML = "previous state is "+ prevState.name
    }

    componentDidUpdate(){}

    render(){
        return(
            <div>
                <p>This is : {this.state.name}</p>
                <p id="prevstate">This is the previous state</p>
            </div>
        )
    }
}