import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

export default class LogInPage extends Component {
    state = {
        users: [],
        user: {
            userName: '',
            password: ''
        },
        redirectToHome: false,
        createdUser: {}
    }
    componentDidMount = () => {
        this.getAllUsers()
    }
    getAllUsers = () => {
        axios.get('/api/users').then(res => {
            this.setState({ users: res.data })
        })
    }
    createUser = () => {
        axios.post('api/users', {
            user: this.state.user
        }).then((res) => {
            this.setState({ redirectToHome: true, createdUser: res.data })
        })
    }
    handleChange = (e) => {
        const user = { ...this.state.user }
        user[e.target.name] = e.target.value
        this.setState({ user })
    }
    handleSignUp = (e) => {
        e.preventDefault()
        this.createUser()
    }
    render() {
        if(this.state.redirectToHome) {
            return <Redirect to={`user/${this.state.createdUser._id}`} />
        }
        return (
            <div>
                <h1>Log-In</h1>
                <Link to='/'>Go Back Home</Link>
                <h3>Please Select an Existing User</h3>
                {this.state.users.map((user) => {
                    return (<Link key={user._id} to={`/user/${user._id}`}>{user.userName}</Link>)
                })}
                <h1>Sign-Up</h1>
                <form onSubmit={this.handleSignUp}>
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input onChange={this.handleChange} name="userName" type="text" value={this.state.userName} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleChange} name="password" type="text" value={this.state.password} />
                    </div>
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}
