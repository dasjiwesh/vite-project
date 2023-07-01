import React from 'react'
export default class Validate_Forms extends React.Component
{
    constructor()
    {
        super();
            this.state={
                name:'',
                password:'',
                nameError:'',
                passError:''
            }
    }

    valid()
    {
        if(!this.state.name.includes("@") && this.state.password.length < 5) 
        {
            this.setState({nameError:'Need @ in UserName', passError: 'Password length should be at least 5'})
        }
        else if(!this.state.name.includes('@'))
        {
            this.setState({nameError: 'Need @ in Username'})
        }
        else if(this.state.password.length < 5)
        {
            this.setState({passError: 'Password length should be at least 5'})
        // console.log("this is in if block")
        // console.log(this.state);
        }
        else
        {
            // console.log("this is in else block")
            // console.log(this.state);
            return true;
        }
    }

submit()
{
    this.setState({nameError:'', passError: ''})
    if(this.valid())
    {
        alert('Form-Submitted')
    }
}

    render()
        {
            return( <div>
                    <h1>Form-Validation</h1>
                    <input 
                        type="text"
                        name="name"
                        onChange={(e)=>{this.setState({name:e.target.value})}}
                        />
                    <p style={{color:'red', fontSize: '14px'}}>{this.state.nameError}</p>
                    <input 
                        type="password"
                        name="password"
                        onChange={(e)=>{this.setState({password:e.target.value})}}
                        />
                    <p style={{color: 'red', fontSize: '14px'}}>{this.state.passError}</p>
                    <button onClick={()=>this.submit()}>Submit</button>
                </div>
            )
        }
}