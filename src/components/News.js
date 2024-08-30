import axios from 'axios';
import React, { Component } from 'react'
import NewsItem from './NewsItem';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            pageNumber: 1,
            totleArticles: 0,
            loading: false
        }
    }

    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.pageNumber}`;
        const articleData = await axios.get(url);
        const parsedData = await articleData.data;
        this.setState({
            articles: parsedData.articles,
            totleArticles: parsedData.totalResults
        });

    }

    handleNextNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.pageNumber + 1}`;
        const articleData = await axios.get(url);
        const parsedData = await articleData.data;
        this.setState({
            articles: parsedData.articles,
            pageNumber: this.state.pageNumber + 1
        });
        console.log(this.state.pageNumber)
    }

    handlePrevNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.pageNumber - 1}`;
        const articleData = await axios.get(url);
        const parsedData = await articleData.data;
       
        this.setState({
            articles: parsedData.articles,
            pageNumber: this.state.pageNumber - 1
        });
        console.log(this.state.pageNumber)
    }

    render() {
        const { mode } = this.props;

        return (
            <>
                <div className={`container text-${mode === "light" ? "dark" : "light"} my-3`}>
                    <h1
                        className={`fs-4 text-decoration-underline text-center text-${mode === "light" ? "danger" : "light"}`}>
                        Tranding News
                    </h1>
                    {/* Create news iteam for each articles */}
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-3 my-2" key={element.url}>
                                <NewsItem
                                    urlToImage={element.urlToImage}
                                    title={element.title}
                                    url={element.url}
                                    mode={mode}
                                    description={element.description}
                                />
                            </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between">
                        <button
                            disabled={this.state.pageNumber <= 1}
                            onClick={this.handlePrevNews}
                            className={`btn-sm btn btn-${mode === "light" ? "dark" : "light"}`}>
                            &larr; Previous
                        </button>
                        <button
                            disabled={this.state.totleArticles / this.props.pageSize <= this.state.pageNumber}
                            onClick={this.handleNextNews}
                            className={`btn-sm btn btn-${mode === "light" ? "dark" : "light"}`}>
                            Next &rarr;
                        </button>
                    </div>
                </div>
            </>
        )
    }
}
