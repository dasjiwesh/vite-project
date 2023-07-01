import React from 'react'
export default class ComponentDidMount extends React.Component
{
    constructor()
    {
        super()
        this.state = {
                data: null
            }
        console.log('constructor')
    }
    componentDidMount()
    {
        this.setState({data: 'updated'})
        console.log('componentDidMount')
    }
    render()
    {
        console.log('render')
        return(
            <div>
                <h1>Life-Cycle Method: componentDidMount</h1>
            </div>
        )
    }
}