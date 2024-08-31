import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        const { urlToImage, title, url, mode, description } = this.props;
        return (
            <>
                <div className="card" style={{
                    height: "420px",
                    backgroundColor: mode === "light" ? "#ffffff" : "#36454f",
                    color: mode !== "light" ? "#ffffff" : "#36454f",
                }}>
                    <img src={urlToImage ? urlToImage : "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg"} className="card-img-top" alt="..." style={{ maxHeight: "160px", maxWidth:"100%" }} />
                    <div className="card-body">
                        <h5 className="card-title">{title ? title.length > 30 ? title.slice(0, 30).trimEnd() + "..." : title : ""}</h5>
                        <p className="card-text">{description ? description.length > 100 ? description.slice(0, 100).trimEnd() + "..." : description : ""}</p>
                        <a
                            href={url}
                            target='_blank'
                            rel="noreferrer"
                            className={`btn btn-sm btn-${mode === "light" ? "dark" : "light"}`}>
                            Read more
                        </a>
                    </div>
                </div>
            </>
        )
    }
}
