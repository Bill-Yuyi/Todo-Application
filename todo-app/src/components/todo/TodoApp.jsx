import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LogInComponent from './LogInComponent'
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import ListTodosComponent from './ListComponent'
import LogoutComponent from './LogOutComponent'
import ErrorComponent from './ErrorComponent'
import TodoComponent from './TodoComponent'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'



class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent />
                    <Routes>
                        <Route path="/" element={<LogInComponent />} />
                        <Route path="/login" element={<LogInComponent />} />
                        <Route path="/welcome/:name" element={
                            <AuthenticatedRoute>
                                <WelcomeComponent />
                            </AuthenticatedRoute>} />
                        <Route path="/todos/:id" element={<AuthenticatedRoute>
                            <TodoComponent />
                        </AuthenticatedRoute>} />
                        <Route path="/todos" element={<AuthenticatedRoute>
                            <ListTodosComponent />
                        </AuthenticatedRoute>} />

                        <Route path="/logout" element={<AuthenticatedRoute>
                            <LogoutComponent />
                        </AuthenticatedRoute>} />
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent />
                </Router>
            </div>
        )
    }
}








export default TodoApp