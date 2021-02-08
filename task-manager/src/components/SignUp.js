import React, { useState } from 'react';
import axios from 'axios';


const SignUp = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const createUser = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/account/signup', {
            firstName,
            lastName,
            email,
            password
        }).then(res => {
            console.log(res)
            alert('You\'ve succesfully signed up! 🎉' )
        }).catch(err => {
            console.log(err)
        });
    }

    return (
        <div>
            <h1>SIGN UP</h1>
            <form onSubmit={createUser}>
                <label htmlFor="fname">First name:</label><br />
                <input type='text' onChange={e => setFirstName(e.target.value)}/> <br/>
                <label htmFor="lname">Last name:</label><br />
                <input type='text' onChange={e => setLastName(e.target.value)}/> <br/>
                <label htmlFor="email">Email:</label><br />
                <input type='email' onChange={e => setEmail(e.target.value)}/> <br/>
                <label htmlFor="password">Password:</label> <br/>
                <input type='password' onChange={e => setPassword(e.target.value)}/> <br/>
                <input type='Submit'/>
            </form><br />
            <footer>THE TASK MANAGER</footer>
        </div>
    )
}
export default SignUp;
