import React, { useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import { useState } from 'react';
import '../App.css';
import triang from '../images/triang.svg';
import circ from '../images/circ.svg';
import yellowtri from '../images/yellowtri.svg';

const Home = (props) => {

    const background ={
        backgroundColor: 'navy',
        color: 'white',
    }
    const whiteText = {
        display: "in-line block",
        fontFamily: "Avenir Next",
        color: 'white',
    }
    const columnStyleOne = {
        color: "white",
        backgroundColor: "navy",
        padding: "5px",
        textAlign: 'center',
        display: "in-line block",
        fontFamily: "Helvetica",
        fontSize: "40px",
    };

    const columnStyleThree = {
        color: "white",
        backgroundColor: "navy",
        padding: "0px 240px 0px 240px",
        textAlign: 'center',
        display: "in-line block",
        fontFamily: "Helvetica",
        fontSize: "18px",
    };
    const columnStyleFour = {
        color: "white",
        backgroundColor: "navy",
        padding: "0px 240px 0px 240px",
        textAlign: 'left',
        display: "in-line block",
        fontFamily: "Avenir",
        fontSize: "25px",
        fontWeight:'bold'
    };
    const columnStyleFive = {
        color: "white",
        backgroundColor: "navy",
        width: '1200px',
        padding: "0px 240px 0px 240px",
        textAlign: 'left',
        display: "in-line block",
        fontFamily: "Avenir-light",
        fontSize: "21px",
    };


    return (
        <div style={background}>
            <div>
                <div style={{display: 'inline-block', zIndex: '1'}}>
                    <img src={triang} alt="triangle" style={{padding: 10}}></img>
                </div>
                <div style={{width: '950px', display: 'inline-block'}}></div>
                <div style={{display: 'inline-block', zIndex: '1'}}>
                    <img src={circ} alt="circ1"></img>
                </div>
                <div style={{width: '950px', display: 'inline-block'}}></div>
                <div style={{display: 'inline-block', zIndex: '1'}}>
                    <img src={yellowtri} alt="ytriangle" style={{padding: 10}}></img>
                </div>
                <div style={{height:'50px'}}></div>
                <div>
                    <h1 style={columnStyleOne}><b>THE ULTIMATE TASK MANAGER.</b></h1>
                    <br></br>
                    <h6 style={columnStyleThree}>BECAUSE THERE AREN'T ANY FREE ONES OUT THERE.</h6>
                </div>
                <div style={{width: '50px', display: 'inline-block'}}></div>
                <div style={{display: 'inline-block', zIndex: '1'}}>
                    <img src={circ} alt="circ1"></img>
                </div>
                <div style={{display: 'inline-block', zIndex: '1'}}>
                    <img src={yellowtri} alt="ytriangle" style={{padding: 10}}></img>
                </div>
                <div style={{width: '350px', display: 'inline-block'}}></div>
                <div style={{display: 'inline-block', zIndex: '1'}}>
                    <img src={circ} alt="circ2"></img>
                </div>
                <div style={{width: '1050px', display: 'inline-block'}}></div>

                <div style={{display: 'inline-block', zIndex: '1'}}>
                    <img src={triang} alt="triangle" style={{padding: 10}}></img>
                </div>

                <div style={{height:'400px'}}></div>

                <h6 style={columnStyleThree}><i>SCROLL DOWN</i></h6>
                <div style={{height:'200px'}}></div>
                <div>
                    <h1 style={columnStyleFour}>WANT JUST ONE EASY PLACE TO STORE YOUR TASKS?</h1>
                    <h4 style={columnStyleFive}>Don't you just wish that you could just keep your tasks in an easy place and just bookmark the page? Since this is a mandatory coding project/homework we have to do, we made this platform completely FREE for you to use.</h4>
                    <h3 style={columnStyleFour}>Go nuts and enjoy the simplicity.</h3>
                    <br></br>
                </div>
                <div>
                    <Link to="/signup" style={columnStyleThree}>
                        <button type="button" className="btn btn-warning ">GET STARTED HERE</button>
                    </Link>
                </div>
                <div style={{width: '950px', display: 'inline-block'}}></div>
                <div style={{display: 'inline-block', zIndex: '1'}}>
                    <img src={triang} alt="bigger"></img>
                </div>
                <div className="container-fluid">
                </div>
            </div>
        </div>



    )
}

export default Home;