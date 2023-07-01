import React from 'react'
import {Button} from 'react-bootstrap'
export default class X extends React.Component
{
    render()
    {
        return(
            <div>
                <h1>Bootstrap</h1>
                <Button onClick={()=>alert('Item-Clicked')}>Click Me</Button>
            </div>
        )
    }
}