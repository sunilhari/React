import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import AppHeaderNotification from './AppHeaderNotification'
class AppHeader extends Component {
   constructor() {
        super();
        this.state = {
            notificationCount: 10
        }
    }
    render() {
        return (
            <AppBar title="NewsApp" 
            /*iconElementRight={<AppHeaderNotification notCount={this.state.notificationCount} />}*/
            />
        );
    }
}

export default AppHeader;
