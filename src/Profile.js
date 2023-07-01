import React from 'react'
export default class Profile extends React.Component
{
    constructor()
    {
        super()
    }
    componentDidMount()
    {
        console.warn('called life-cycle method');
    }
    render()
    {
        return(
            <div>
                <h1>Profile Component</h1>
            </div>
        )
    }
} 