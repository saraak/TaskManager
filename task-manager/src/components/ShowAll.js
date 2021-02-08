import React, {useState, useEffect } from 'react';
import {Link, navigate } from '@reach/router';
import axios from 'axios';
import '../App.css';

const ShowAll = (props) => {
    const [allProjects, setAllProjects] = useState([]);
    const [backlog, setBacklog] = useState();
    const [inProgress, setInProgress] = useState();
    const [completed, setCompleted] = useState();
    const [name, setName] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [tickle, setTickle] = useState(false);

    useEffect(() => {
        axios
            .post("http://localhost:8000/api/Projects", {
                id: props.getUser._id
            })
            .then((res) => {
                console.log(res.data);
                setAllProjects(res.data);
              })
            .catch(err => console.log(err));
        
    }, [tickle])
    const backlogToInProgress = (e, id, nm, dd) => {
      e.preventDefault();
      console.log(`${id} ${nm} ${dd}`);
      console.log("backlog button clicked"); 
        axios
        .put(`http://localhost:8000/api/Projects/${id}`, {
            name: nm,
            dueDate: dd,
            backlog: false,
            inProgress: true,
            completed: false,
        })
        .then((res) => {
            console.log(res);
            setTickle(!tickle);
        })
        .catch((err) => console.log(err));
    }
    const inProgressToComplete = (e, id, nm, dd) => { 
      e.preventDefault();
      console.log(`${id} ${nm} ${dd}`);
      console.log("move to button clicked");     
        axios
        .put(`http://localhost:8000/api/Projects/${id}`, {
            name: nm,
            dueDate: dd,
            backlog: false,
            inProgress: false,
            completed: true,
        })
        .then((res) => {
            console.log(res);
            setTickle(!tickle);
        })
        .catch((err) => console.log(err));     
    }

    const deleteProject = (e, id) => {
      e.preventDefault();
      axios
          .delete(`http://localhost:8000/api/Projects/${id}`)
          .catch((err) => console.log(err));
  }
    return (
      <div >
        <div>         
          <h2>Welcome back, {props.getUser.firstName} </h2>
        </div>
        <div style={{width: "span", margin:"0px"}}>
          <h3 className="colTitle" id="bckLog">Backlog</h3>
          <h3 className="colTitle" id="inProgress">In Process</h3>
          <h3 className="colTitle" id="completedTitle">Complete</h3>
        </div>
        <div className="aThird">
          { allProjects.map((Project, i) => {
            return (
              <div>  
                {Project.backlog ? 
                  <p key={ i } className="projectThumb">
                    <div style={{display: "inline-block", color: "black"}}>
                        <h4>{ Project.name }</h4>
                        <p>Due Date: {(new Date(Project.dueDate)).toLocaleDateString("en-us")}</p>
                         <p>{Project._id}</p>
                      <button 
                        className="redButton" 
                        id="mvProg"
                        onClick={(e) => backlogToInProgress(e, Project._id, Project.name, Project.dueDate)}>
                          Start Project
                      </button>      
                    </div>
                  </p>  
                : null }
              </div>   
            )
          })}
        </div>
        <div className="aThird"> 
          { allProjects.map((Project, i) => {
            return (
              <div>  
                {Project.inProgress ? 
                  <p key={ i } className="projectThumb">
                    <div style={{display: "inline-block", color: "black"}}>
                      <h4>{ Project.name }</h4>
                      <p>Due Date: {(new Date(Project.dueDate)).toLocaleDateString("en-us")}</p>                        
                      <button 
                        className="redButton"
                        id="mvComp" 
                        onClick={(e) => inProgressToComplete(e, Project._id, Project.name, Project.dueDate)}>
                          Move to Completed
                      </button>     
                    </div>
                  </p>         
                : null }
              </div>   
            )
          })}
        </div>
        <div className="aThird">          
          { allProjects.map((Project, i) => {
            return (
              <div>  
                {Project.completed ? 
                  <p key={ i } className="projectThumb">
                    <div style={{display: "inline-block", color: "black"}}>
                      <h4>{ Project.name }</h4>
                      <p>Due Date: {(new Date(Project.dueDate)).toLocaleDateString("en-us")}</p>
                      <button 
                        className="redButton" 
                        id="rmvProj"
                        onClick={(e) => deleteProject(e, Project._id)}>
                          Remove Project
                      </button> 
                    </div>
                  </p>
                : null }
              </div>   
            )
          })}
        </div>

        <div>
          <Link to="/Projects/new">
            <button className="blueButton" style={{width:"300px"}}>Add New Project</button>
          </Link>
        </div>
      </div>
    )
}

export default ShowAll;