import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
class NewsItem extends Component {
    static defaultProps = {
        title:"No Title",
        subTitle:"This is my Subtitle",
        description:"News Description",
        descriptionURL:""
    }
    render() {
        return (
            <Card>
                <CardHeader
                    title={this.props.title}
                    subtitle={this.props.subTitle}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    {this.props.description}
                </CardText>
            </Card>
        );
    }
}

export default NewsItem;
