import axios from 'axios';
import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';

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
        this.setState({ loading: true })
        const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.pageNumber}`;
        const articleData = await axios.get(url);
        const parsedData = await articleData.data;
        this.setState({
            articles: parsedData.articles,
            totleArticles: parsedData.totalResults,
            loading: false
        });

    }

    handleNextNews = async () => {
        this.setState({ loading: true })
        const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.pageNumber + 1}`;
        const articleData = await axios.get(url);
        const parsedData = await articleData.data;
        this.setState({
            articles: parsedData.articles,
            pageNumber: this.state.pageNumber + 1,
            loading: false
        });
    }

    handlePrevNews = async () => {
        this.setState({ loading: true })
        const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.pageNumber - 1}`;
        const articleData = await axios.get(url);
        const parsedData = await articleData.data;

        this.setState({
            articles: parsedData.articles,
            pageNumber: this.state.pageNumber - 1,
            loading: false
        });
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
                    {/* add spinner if the data is loading */}
                    {this.state.loading && <Spinner />}
                    {/* Create news iteam for each articles */}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className="col-md-4 my-2" key={element.url}>
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
