import React from 'react'
export default class ComponentDidUpdate extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            active: null,
            who: null
        }
    }
    componentDidUpdate()
    {
        console.warn('ComponentDidUpdate')
        if(this.state.who==null)
        {
            this.setState({who:'Jiwesh'})
        }
    }
    render()
    {
        return(
            <div>
<button onClick={()=>{this.setState({active:'yes'})}}>Life-Cycle Method: ComponentDidUpdate {this.state.who}</button>
            </div>
        )
    }
} 