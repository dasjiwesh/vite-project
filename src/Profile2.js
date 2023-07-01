import React from 'react'
export default function Profile2(p)
{
    let red = () => {
        alert('red function called')
    }
    return <div>
        <h1 onClick={red}>{p.text}</h1>
    </div>
}