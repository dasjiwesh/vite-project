import React from 'react';
import './Style.css';
export default function Style(p)
{
    const h2 = {
        color: 'green',
        fontSize: '36px',
    }
    return <div>
                <h1 className={p.data=='apply'?'header':''}>React Global Style</h1>
                <h2 style={p.data=='apply'?h2:''}>React Inline Style</h2>
            </div>
}