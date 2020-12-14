import React from 'react'
import '../App.css';
import {useSpring, animated} from 'react-spring'
const Projects = () => {
    return (
        <div>
            <h3>Projects</h3>
            <h4 style={{color:"white"}}>given below the list of my work</h4>
            <div className="threediv">
                Project 1       
            </div>
            <div className="threediv">
            Project 2
            </div>
            <div className="threediv">
            Project 3
            </div>
        </div>
    )
}

export default Projects
