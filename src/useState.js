import React, {useState} from 'react'
function App()
{
    const[count, setCount] = useState(100)
    return(
        <div>
            <h1>Hooks in Functional Component</h1>
            <button onCLick={()=>{setCount(count+1)}}>Increment</button>
        </div>
    )
}
export default useState;

//Xport this in Index.js 2 C the results