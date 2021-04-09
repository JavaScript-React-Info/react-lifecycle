import React from 'react';
import ConstructorMethod from './components/mounting/ConstructorMethod'
import GetDerivedStateFromPropsMethod from './components/mounting/GetDerivedStateFromPropsMethod'
import RenderMethod from './components/mounting/RenderMethod'
import ComponentDidMountMethod from './components/mounting/ComponentDidMountMethod'
import ShouldComponentUpdateMethod from './components/updating/shouldComponentUpdateMethod'
import GetSnapshotBeforeUpdateMethod from './components/updating/getSnapshotBeforeUpdateMethod'
import ComponentDidUpdateMethod from './components/updating/componentDidUpdateMethod'
import ComponentWillUnmountMethod from './components/unmounting/componentWillUnmountMethod'
import ErrorApp from './components/ErrorHandling/ErrorBoundaryMethod'

class App extends React.Component{
    render(){
        return(
            <div>
                <h1 className="ui block header">Life cycle method react</h1>
                    <h2 className="ui block header">Mounting phase</h2>
                    <h3>Constructor Method</h3>
                    <ConstructorMethod />
                    <h3>getDerivedStateFromProps Method</h3>
                    <GetDerivedStateFromPropsMethod />
                    <h3>Render method</h3>
                    <RenderMethod />
                    <h3>ComponentDidMount method</h3>
                    <ComponentDidMountMethod />
                    <div className="ui hidden divider"></div>
                    <h2 className="ui block header">Updating phase</h2>
                    <h3>ShouldComponentUpdate Method</h3>
                    <ShouldComponentUpdateMethod />
                    <h3>getSnapshotBeforeUpdate Method</h3>
                    <GetSnapshotBeforeUpdateMethod />
                    <h3>ComponentDidUpdate Method</h3>
                    <ComponentDidUpdateMethod />
                    <div className="ui hidden divider"></div>
                    <h2 className="ui block header">Unmounting phase</h2>
                    <h3>ComponentWillUnmount Method</h3>
                    <ComponentWillUnmountMethod/>
                    <h2 className="ui block header">ErrorBoundary phase</h2>
                    <h3>getDerivedStateFromError Method</h3>
                    <ErrorApp/>
            </div>

        )
    }
}
export default App