import React from "react";
import ProjectsItem from "../components/projectItem";
import '../styles/Project.css';
import { ProjectList } from "../helpers/ProjectList";

function Projects () {
    return(
        <div className="projects">
            <h1>My Personal Projects</h1>
            <div className="projectList">
                { ProjectList.map((project, idx) => {
                    return (<ProjectsItem id={idx} name={project.name} image={project.image} />)
                })}
            </div>
        </div>
    )
}

export default Projects;