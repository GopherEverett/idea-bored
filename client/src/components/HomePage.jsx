import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Hello and Welcome to Ideas App</h1>
                <Link to="/login">Log In</Link>
            </div>
        )
    }
}
