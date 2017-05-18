import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppHeader from './components/AppHeader'
import AppBody from './components/AppBody'
class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div className = "container">
            <AppHeader />
            <AppBody />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
