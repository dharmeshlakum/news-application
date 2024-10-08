import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {


    render() {
        const { mode, handleDarkMode } = this.props
        const linkStyle = {
            color: mode === "light" ? "#000000" : "#ffffff"
        }
        return (
            <nav
                style={linkStyle}
                className={`navbar fixed-top navbar-expand-lg bg-${mode === "light" ? "light" : "dark"}`}>
                <div className="container-fluid">
                    <Link
                        className={`navbar-brand`}
                        style={linkStyle}
                        to="/">
                        {this.props.heading}
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className={`nav-link`}
                                    style={linkStyle}
                                    aria-current="page"
                                    to="/">
                                    Home
                                </Link>
                            </li>
                            <div className="dropdown">
                                <button className="btn dropdown-toggle pt-2" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={linkStyle}>
                                    Categories
                                </button>
                                <ul className="dropdown-menu rounded text-center" style={{ background: mode === "light" ? "#ffffff" : "#000000" }}>
                                    <li className="nav-item">
                                        <Link
                                            className={`nav-link`}
                                            style={linkStyle}
                                            aria-current="page"
                                            to="/business">
                                            Business
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className={`nav-link`}
                                            style={linkStyle}
                                            aria-current="page"
                                            to="/entertainment">
                                            Entertainment
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className={`nav-link`}
                                            style={linkStyle}
                                            aria-current="page"
                                            to="/general">
                                            General
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className={`nav-link`}
                                            style={linkStyle}
                                            aria-current="page"
                                            to="/health">
                                            Health
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className={`nav-link`}
                                            style={linkStyle}
                                            aria-current="page"
                                            to="/science">
                                            Science
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className={`nav-link`}
                                            style={linkStyle}
                                            aria-current="page"
                                            to="/sports">
                                            Sports
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className={`nav-link`}
                                            style={linkStyle}
                                            aria-current="page"
                                            to="/technology">
                                            Technology
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link`}
                                    style={linkStyle}
                                    to="/">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox" role="switch"
                            id="darkMode-check-box"
                            onClick={handleDarkMode} />
                        <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked">
                            Dark Mode
                        </label>
                    </div>
                </div>
            </nav>
        )
    }
}
