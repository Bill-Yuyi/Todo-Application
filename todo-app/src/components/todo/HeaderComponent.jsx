import React, { Component } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import AuthenticationService from './AuthenticationService.js'


class HeaderComponent extends Component {

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()


        return <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div>
                    <a href="https://github.com/Bill-Yuyi?tab=overview&from=2022-03-01&to=2022-03-31" className="navbar-brand">
                        Bill Yuyi
                    </a>
                </div>
                <ul className="navbar-nav">
                    {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/welcome/Bill">Home</Link></li>}
                    {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/todos">Todos</Link></li>}
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    {!isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/login">Login</Link></li>}
                    {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                </ul>
            </nav>
        </header>
    }
}

function WithNavigate(props) {
    let navigate = useNavigate()
    return <HeaderComponent {...props} navigate={navigate} />

}

export default WithNavigate