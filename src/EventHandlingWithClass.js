import React from 'react'
export default class EventHandlingWithClass extends React.Component
{
    testFun()
    {
        alert('testFun')
    }
    render()
    {
        return(
            <div>
                <h1>Hello</h1>
                <button onClick={()=>this.testFun()}>Click Here</button>
                {/* <button onClick={this.testFun.bind()}>Click Here</button> */}
            </div>
        )
    }
}