import React, {Component} from 'react'
export default class ComponentWillUnmount extends Component 
{
    componentWillUnmount()
    {
        alert('Component is Deleted')
    }
    render()
    {
        return(
            <div>
                <ul>
                    <li>Name: Jiwesh</li>
                    <li>E-mail: abc@y.com</li>
                    <li>Phone: 12345</li>
                </ul>
            </div>
        );
    }
}