import React from 'react'
export default class ListingWithMap extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            list:[
                {name:'Bruce', phone:'123', mail:'bruce@123.com'},
                {name:'Clark', phone:'456', mail:'clark@456.com'},
                {name:'Barrey', phone:'789', mail:'barrey@789.com'}
            ]
        }
    }
    render()
    {
        return(
            <div>
                <h1>Listing With Map</h1>
                {this.state.list.map((item)=>
                <div>
                    Name: <span>{item.name}</span>
                    <br/><br/>
                    Phone: <span>{item.phone}</span>
                    <br/><br/>
                    Email: <span>{item.phone}</span>
                    <br/><br/>
                </div>)}
            </div>
        );
    }
}