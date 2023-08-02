import React from "react";
import { useParams } from "react-router";
import { ProjectList } from "../helpers/ProjectList";
import { BsGithub } from "react-icons/bs";
// function ProjectDisplay ({image, name}) {
    // We can also proceed with this method also.
// }
import "../styles/ProjectDisplay.css"


function ProjectDisplay () {
    const { id } = useParams();
    const project = ProjectList[id];
    return(
        <div className="project">
           <h1>{project.name}</h1>
           <img src={project.image} alt="" />
           <p>
            <b>Skills:</b> {project.skills}
           </p>
           <BsGithub />
        </div>
    );
}

export default ProjectDisplay;