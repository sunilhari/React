import React, {Component} from 'react';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import './App.css';
import uuid from 'uuid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }
  componentWillMount() {}

  componentDidMount() {
    this.setState({
      projects: [
        {
          id:uuid.v4(),
          title: "Angular",
          description: "No Description"
        }, {
          id:uuid.v4(),
          title: "ReactJs",
          description: "No Description"
        }, {
          id:uuid.v4(),
          title: "EmberJs",
          description: "No Description"
        }
      ]
    },()=>{
        //CallBack Function
        //console.log('Component Updated with a different state');
    })
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
     this.setState({projects:projects});
  }
  handleProjectDel(id){
     let projects = this.state.projects;
     projects = projects.filter(project=>{
       return project.id!=id;
     });
     this.setState({projects:projects});
  }
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <AddProject addProject = {this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDeleteFromScope = {this.handleProjectDel.bind(this)}/>
      </div>
    );
  }
}

export default App;
