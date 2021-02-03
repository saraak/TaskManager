import React from 'react';

const SignUp = () => {
    return (
        <div>
            <h1>SIGN UP</h1>
            <form>
                <label for="fname">First name:</label><br/>
                    <input type='text' /><br/>
                <label for="lname">Last name:</label><br/>
                    <input type='text' /><br/>
                <label for="email">Email:</label><br />
                    <input type='email' /><br/>           
            </form><br/>
            <footer>THE TASK MANAGER</footer>
        </div>
    )
}
export default SignUp;
