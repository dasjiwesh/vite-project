import React from 'react'
export default class State extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            name: 'Hari',
            gender: 'Supreme-Person',
            count: 0
        }
    }
    updateState()
    {
        this.setState ({
            name: 'Ram',
            count: this.state.count+1
        })
    }
    render()
    {
        console.warn('render')
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <h1>Gender {this.state.gender}</h1>
                <h1>Count {this.state.count}</h1>
                <button onClick={()=>{this.updateState()}}>Update Name</button>
            </div>
        )
    }
} 