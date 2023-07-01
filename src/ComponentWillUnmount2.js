import React from 'react'
import ComponentWillUnmount from './ComponentWillUnmount'
class App extends React.Component
{
  constructor()
  {
    super()
    this.state={
      toggle: true
    }
  }
  render()
  {
    return(
      <div>
        {
          this.state.toggle ?
          <ComponentWillUnmount /> : null
        }
        <h1>React: componentWillUnmount</h1>
        <button onClick={()=>{this.setState({toggle: !this.state.toggle})}}>Delete User</button>
      </div>
    )
  }
}
export default App;

//
//Xport this in Index.js 2 C the results