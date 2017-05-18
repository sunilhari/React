import React, { Component } from 'react';
import uuid from 'uuid';
class AddProject extends Component {
    static defaultProps = {
        projects: ['Backbone', 'Angular Js', 'Ember Js', 'React Js', 'Aurelia']
    }
    constructor() {
        super();
        this.state = {
            newProject: {}
        }
    }
    onFormSubmit(e) {
        e.preventDefault();
        var project = {
            id:uuid.v4(),
            title: this.refs.projectName.value,
            description:this.refs.projectDesc.value
        }
        this.setState({newProject:project},function(){
            this.props.addProject(this.state.newProject);
        });
        
    }
    render() {
        let projects = this.props.projects.map(project => {
            return <option key={project} value={project}>{project}</option>
        })
        return (
            <div className="add-project">
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <div>
                        <label>Project Name:</label>
                        <select ref="projectName">
                            {projects}
                        </select>
                        <br />
                        <label>Project Description</label>
                        <textarea ref="projectDesc"></textarea>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddProject;
