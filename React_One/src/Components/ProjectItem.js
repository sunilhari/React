import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id){
    console.log('Deleting Project');
    this.props.onDelete(id);
  }
  render() {
      let project = this.props.project;
    return (
      <li className="ProjectItem">
      <strong>id:{project.id} .{project.title}</strong> - ({project.description})  <a href = "#" onClick={this.deleteProject.bind(this,this.props.project.id)}>Delete</a>
      </li>
    );
  }
}

export default ProjectItem;
