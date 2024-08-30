import React, { Component } from 'react'

export default class Navbar extends Component {

    render() {
        const { mode, handleDarkMode } = this.props
        return (
            <nav
                className={`navbar navbar-expand-lg bg-${mode === "light" ? "light" : "dark"} text-${mode === "dark" ? "light" : "dark"}`}>
                <div className="container-fluid">
                    <a
                        className={`navbar-brand text-${mode === "dark" ? "light" : "dark"}`}
                        href="/">
                        {this.props.heading}
                    </a>
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
                                <a
                                    className={`nav-link text-${mode === "dark" ? "light" : "dark"}`}
                                    aria-current="page"
                                    href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link text-${mode === "dark" ? "light" : "dark"}`}
                                    href="/">
                                    About
                                </a>
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
