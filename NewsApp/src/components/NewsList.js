import React, { Component } from 'react';
import NewsItem from './NewsItem';
import $ from 'jquery';

class NewsList extends Component {
    constructor() {
        super();
        this.state = {
            news: []
        }
    };
    fetchNewsData() {
        $.ajax({
            url: 'https://content.guardianapis.com/search',
            data: {
                'api-key': '49c226d2-5881-487e-a373-98c09ed3cb27'
            },
            success: (response => {
                let news = response.response.results;
                this.setState({ news: news });
            })
        });
    };
    prepareNewsItems() {
        if (this.state.news) {
            let news = this.state.news.map(newsItem => {
                return (
                    <NewsItem key={newsItem.id} title={newsItem.webTitle} subTitle={newsItem.sectionName} descriptionURL={newsItem.apiUrl} />
                )
            });
            return news;
        }
    };
    componentWillMount() {
        this.fetchNewsData();
    };
    componentDidMount() { };
    render() {
        let newsList = this.prepareNewsItems();
        return (
            <div className="NewsList">
                {newsList}
            </div>
        );
    }
}

export default NewsList;
