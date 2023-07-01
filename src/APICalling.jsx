import React from 'react'
export default class APICalling extends React.Component
{
    constructor()
    {
        super();
        this.state={
            users:null
        }
    }
    componentDidMount()
    {
        console.log("under componentDidMount!");
        fetch('https://reqres.in/api/users').then((resp)=>{
            resp.json().then((result)=>
            {
                console.warn(result)
            })
        })
    }
    render()
    {
        return(
            <div>
                <h1>Fetching API Data</h1>
            </div>
        );
    }
}