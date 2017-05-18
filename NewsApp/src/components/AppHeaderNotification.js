import React, { Component } from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
class AppHeaderNotification extends Component {
    render() {
        return (
            <div>
                <Badge
                    badgeContent={this.props.notCount}
                    secondary={true}
                    badgeStyle={{ top: 12, right: 12 }}
                >
                    <IconButton tooltip="Trending">
                        <NotificationsIcon />
                    </IconButton>
                </Badge>
            </div>
        );
    }
}

export default AppHeaderNotification;
