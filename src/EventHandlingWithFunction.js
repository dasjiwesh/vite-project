import React from 'react'
function EventHandlingWithFunction()
{
    const testFun = () =>
    {
        alert('testFun called')
    }
    return(
        <div>
            <h1>Hello</h1>
            <button onClick={testFun}></button>
        </div>
    )
}