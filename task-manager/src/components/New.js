import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router'

const New = (props) => {

    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const [dueDate, setDueDate] = useState("");
    const [nameError, setNameError] = useState("");

    const addProject = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:8000/api/Projects/new`, {
                name: name,
                dueDate: dueDate,
                creator: props.getUser._id
            })
            .then((res) => {
                console.log(res.data);
                if(res.data.error){
                    setErrors(res.data.error.errors);
                } else {
                    navigate(`/showall`);
                }
            })
            .catch((err) => console.log(err));
    }

    const columnStyleThree = {
        color: "white",
        backgroundColor: "navy",
        padding: "20px 150px 20px 150px",
        display: "in-line block",
        fontFamily: "Avenir Next",
        fontSize: "30px",
        textAlign:'center',
        fontWeight:'bold'
    };

    return (
        <div >
            <div>
                <div style={{height:'150px'}}></div>

                <h3 style={columnStyleThree}>SO...WHAT DO YOU NEED TO DO?</h3>
                <form onSubmit={addProject}>
                    <div style={{backgroundColor:'navy', textAlign:'center'}}>
                        <div style={{margin: "5px"}}>
                            <div>
                                <label style= {{display: "inline-block", margin: "0px 12px 5px 5px"}}>Project Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => {setName(e.target.value)}}
                                    style={{width: "200px"}}
                                />
                            </div>
                            {errors.name ? (
                                <span className="errorFont" style={{display: "block"}}>{errors.name.message}</span>
                            ) : null
                            }
                            {nameError !== "" ? (
                                <p className="errorFont" style={{display: "block"}}>{nameError}</p>
                            ) : null
                            }
                        </div>
                        <label style= {{display: "inline-block", margin: "0px 40px 5px 5px"}}>
                            Due Date</label>
                        <input
                            type="date"
                            name="dueDate"
                            onChange={(e) => setDueDate(e.target.value)}
                            style={{display: "inline-block", margin: "0% 10%", width: "200px"}}
                        />
                        {errors.dueDate ? (
                            <span className="errorFont" style={{display: "block"}}>{errors.dueDate.message}</span>
                        ) : null
                        }
                        <br></br>
                        <div style={{height:'40px'}}></div>
                        <button type="submit"
                                className="btn-lg btn-danger"
                                onClick = {(e) => addProject(e)}
                                style={{margin:"40px 0px", width: "300px"}}>
                            Let's go!
                        </button>
                    </div>
                    <div style={{height:'400px'}}></div>
                </form>
            </div>
        </div>
    )
}

export default New;