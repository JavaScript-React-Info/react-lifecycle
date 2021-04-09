import React from 'react';

 class ErrorBoundary extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        hasError: false
      };
    }
  
    static getDerivedStateFromError(error) { //this will render new UI
      return { hasError: true };
    }

    componentDidCatch(error, info){ //log the error to the service
      console.log(error)
      console.log(info)
    }
    
    render() {
      if (this.state.hasError) {
        return (
          <h3 className="ui red header">Something went wrong with `Error boundry came`</h3>
        );
      }else{
        return this.props.children;
      }

    }
  }

class MyComponent extends React.Component{
  constructor(props){
    super(props);

    this.state={
      error: false
    }
  }

  handleClick=()=>{
    this.setState({error: true})
  }

  render(){
    if(this.state.error){
      throw new Error('OOPS error')
    }
    return(
      <div>
        This is Child Component
        <button className="ui orange button" onClick={this.handleClick}>Crash App</button>
      </div>
    )
  }
}

export default class ErrorApp extends React.Component{
  render(){
    return(
      <ErrorBoundary>
        <MyComponent/>
      </ErrorBoundary>
    )
  }
}

