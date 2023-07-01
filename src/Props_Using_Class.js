import React from 'react'
export default class Props_Using_Function extends React.Component
{
    render()
    {
        return(
            <div>
                <h1>{this.props.data}</h1>
                <h1>{this.props.text.name}</h1>
            </div>
        )
    }
}