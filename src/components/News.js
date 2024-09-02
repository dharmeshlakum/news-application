import axios from 'axios';
import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {

    static defaultProps = {
        country: "in",
        category: "general",
        pageSize: 5
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            pageNumber: 1,
            totleArticles: 0,
            loading: false
        }
    }

    async updatedNews() {
        document.title = `News Daily - ${this.props.category}`
        this.props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.pageNumber}`;
        const articleData = await axios.get(url);
        const parsedData = await articleData.data;
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totleArticles: parsedData.totalResults,
        });
        this.props.setProgress(100)
    }

    async componentDidMount() {
        this.updatedNews();
    }

    fetchMoreNews = () => {
        this.setState({
            pageNumber: this.state.pageNumber + 1
        });
        this.updatedNews();
    }

    render() {
        const { mode } = this.props;

        return (
            <>

                <h1
                    className={`fs-4 text-decoration-underline text-center text-${mode === "light" ? "danger" : "light"}`} style={{marginTop:"72px"}}>
                    Tranding{this.props.category === "general" ? " " : ` ${this.props.category[0].toUpperCase() + this.props.category.slice(1)} `}News
                </h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreNews}
                    hasMore={this.state.articles.length <= this.state.totleArticles}
                    loader={<Spinner />}
                >
                    {/* Create news iteam for each articles */}
                    <div className={`container text-${mode === "light" ? "dark" : "light"} my-3`}>
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4 my-2" key={element.url}>
                                    <NewsItem
                                        urlToImage={element.urlToImage}
                                        title={element.title}
                                        url={element.url}
                                        mode={mode}
                                        author={element.author ? element.author : "unknown"}
                                        time={element.publishedAt ? new Date(element.publishedAt).toDateString() : ""}
                                        publisher={element.source?.name ? element.source?.name : ""}
                                        description={element.description}
                                    />
                                </div>
                            })}
                        </div>
                    </div >
                </InfiniteScroll>
            </>
        )
    }
}
