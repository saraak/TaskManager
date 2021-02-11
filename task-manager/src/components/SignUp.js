import React, { useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const SignUp = (props) => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const blackmini ={
        backgrounndColor: "navy",
        color: "white",
        fontFamily: "Avenir Next",
        fontSize: '10px',
        padding: "5px",
        margin: "0px",

    }

    const submitForm = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/account/signup", {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
            // what data we need - an object
            .then((res) => {
                console.log(res.data);
                props.setUser(res.data);
                if(res.data.errors){
                    alert(res.data.message.replaceAll(',','\n'))
                }else {
                    console.log("Received");
                    alert("Thank you. Your account has been created.")
                    navigate("/showall");
                }

            })
            .catch((err) => alert(err))}

    const mystyle = {
        color: "white",
        backgroundColor: "navy",
        padding: "10px",
        fontFamily: "Avenir Next",
        align: "left",
    };

    const columnStyleThree = {
        color: "white",
        backgroundColor: "navy",
        padding: "0px 390px 0px 390px",
        textAlign: 'justify',
        display: "in-line block",
        fontFamily: "Avenir Next",
        fontSize: "17px",
    };
    return (
        <div style={mystyle}>
            <Link style={blackmini} className="float-left m-2" to="/">BACK</Link>
            <br></br>
            <br></br>
            <div className="my-5"/>
            <h1 style={{textAlign:'center'}}>SIGN UP</h1>
            <div className="my-3"/>
            <form onSubmit={submitForm}>

                <label className="m-3">First Name</label>
                <input className="form-control w-50 col-lg-4 offset-lg-4"
                       type="text"
                       name="name"
                       value={ firstName }
                       onChange={ (e) => setFirstName(e.target.value)}/>
                { errors.firstName ? <p className="text-danger">{errors.firstName.properties.message} </p>: "" }

                <br/>

                <label className="m-3">Last Name</label>
                <input className="form-control w-50 col-lg-4 offset-lg-4"
                       type="text"
                       name="name"
                       value={ lastName }
                       onChange={ (e) => setLastName(e.target.value)}/>
                { errors.lastName ? <p className="text-danger">{errors.lastName.properties.message} </p>: "" }

                <br/>

                <label className="m-3">Email</label>
                <input className="form-control w-50 col-lg-4 offset-lg-4"
                       type="text"
                       name="email"
                       value={ email }
                       onChange={ (e) => setEmail(e.target.value)}/>
                { errors.email ? <p className="text-danger">{errors.email.properties.message} </p>: "" }

                <br/>

                <label className="m-3">Password</label>
                <input className="form-control w-50 col-lg-4 offset-lg-4"
                       type="password"
                       name="password"
                       value={ password }
                       onChange={ (e) => setPassword(e.target.value)}/>
                { errors.password ? <p className="text-danger">{errors.password.properties.message} </p>: "" }

                <br>
                </br>
                <button type="submit" className="btn-lg btn-warning"><b>Create Account!</b></button>
            </form>
            <div className="my-5"/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>)
}

export default SignUp;

