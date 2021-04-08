import React from 'react';

export default class ComponentDidMountMethod extends React.Component{
    constructor(props){
        super(props)

        this.state={
            name:" this is the constructor method",
            data:[]
        }
    }

    componentDidMount(){
        //Example 1 for setTimeout
        setTimeout(()=>{
            this.setState({name: "Componentdid mount method"})
        }, 3000)

        // Example calling external API using fetch
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json(   ))
        .then((data)=> this.setState({data: data}))
    }

    render(){
        return(
            <div>
                <p>This is name <span className="ui red header">{this.state.name}</span></p>
                <p>We have list of name from api and will be dispalyed</p>
                {this.state.data.map((el)=>{
                    return <h6 key={el.id}>{el.name}</h6>
                })}
            </div>
        )
    }
}