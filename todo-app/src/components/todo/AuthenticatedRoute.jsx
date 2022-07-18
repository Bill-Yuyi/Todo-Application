import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import { Navigate } from 'react-router-dom'


class AuthenticatedRoute extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()

        return isUserLoggedIn ? { ...this.props.children } : <Navigate to="/login" />

    }
}
export default AuthenticatedRoute
