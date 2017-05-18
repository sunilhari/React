import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
class Projects extends Component {
  onDeleteProjRequest(id){
    console.log('Request To Delete Project Recieved');
    this.props.onDeleteFromScope(id)
  }
  render() {
     let projectItems;
     if(this.props.projects){
       projectItems = this.props.projects.map(project=>{
          return (
            <ProjectItem key = {project.id} project={project}  onDelete={this.onDeleteProjRequest.bind(this)}/>
          )
       });
     }
    return (
      <div className="Projects">
        <h3>List of Projects</h3>
        <ul>
        {projectItems}
        </ul>
      </div>
    );
  }
}

export default Projects;
