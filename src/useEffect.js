import React, {useState, useEffect} from 'react'
const Forms = () => {
    const[count, setCount] = useState(1)
    useEffect(()=>
    {
        console.warn('count')
    },[count==5])
    return(
        <div>
            <h1>Use Effect Hooks in ReactJs...{count}</h1>
            <button onClick={()=>setCount(count+1)}>Update State</button>
        </div>
    );
};
export default Forms;

//Xport this in Index.js 2 C the results