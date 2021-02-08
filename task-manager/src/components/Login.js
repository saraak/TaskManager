import React, { useState } from 'react';
import axios from 'axios';
import triang from '../images/triang.svg';
import circ from '../images/circ.svg';
import yellowtri from '../images/yellowtri.svg';
import { navigate, Link } from '@reach/router';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const blackmini ={
        backgroundColor: "navy",
        color: "white",
        fontFamily: "Avenir Next",
        fontSize: '10px',
        padding: "5px",
        margin: "0px",

    }

    const submitForm = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/account/login", {
                email: email,
                password: password
            })
            // what data we need - an object
            .then((res) => {
                console.log(res.data);
                props.setUser(res.data)
                alert("Welcome back!")
                navigate("/showall")
            })
            .catch((err) => alert("User does not exist"))}

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
            <h1 style={{textAlign:'center'}}>Please login below:</h1>
            <div className="my-3"/>
            <form onSubmit={submitForm}>
                <div style={{display: 'inline-block', zIndex: '1'}}>
                    <img src={triang} alt="triangle" style={{padding: 10}}></img>
                </div>
                <div style={{width: '50px', display: 'inline-block'}}></div>
                <div style={{display: 'inline-block', zIndex: '1'}}>
                    <img src={yellowtri} alt="ytriangle" style={{padding: 10}}></img>
                </div>
                <div style={{width: '50px', display: 'inline-block'}}></div>
                <div style={{display: 'inline-block', zIndex: '1'}}>
                    <img src={circ} alt="circ1"></img>
                </div>
                <div style={{height:'30px'}}></div>
                <label className="m-3">EMAIL</label>
                <input className="form-control w-50 col-lg-4 offset-lg-4"
                       type="text"
                       name="email"
                       value={ email }
                       onChange={ (e) => setEmail(e.target.value)}/>
                { errors.email ?
                    <p className="text-danger">
                        {errors.email.message} </p> : "" }

                        <br/>

                <label className="m-3">PASSWORD</label>
                <input className="form-control w-50 col-lg-4 offset-lg-4"
                       type="text"
                       name="password"
                       value={ password }
                       onChange={ (e) => setPassword(e.target.value)}/>
                { errors.password ?
                    <p className="text-danger">{errors.password.message} </p> : "" }

                <br>
                </br>
                <button type="submit" class="btn-lg btn-warning"><b>Login</b></button>
            </form>
            <div className="my-5"/>
            <div style={{width: '150px', display: 'inline-block'}}></div>
            <div style={{display: 'inline-block', zIndex: '1'}}>
                <img src={circ} alt="circ2"></img>
            </div>
            <div style={{width: '1050px', display: 'inline-block'}}></div>
            <div style={{width: '150px', display: 'inline-block'}}></div>
            <div style={{display: 'inline-block', zIndex: '1'}}>
                <img src={triang} alt="triangle" style={{padding: 10}}></img>
            </div>
            <div style={{width: '150px', display: 'inline-block'}}></div>

            <div style={{width: '950px', display: 'inline-block'}}></div>
            <div style={{display: 'inline-block', zIndex: '1'}}>
                <img src={circ} alt="circ1"></img>
            </div>

        </div>)
}

export default Login;

