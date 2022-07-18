import React, { Component } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'
class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.state = {
            welcomeMessage: " "
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
    }
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className='container'>

                    Welcome {this.props.params.name}. You can manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    Click here to get a welcome message
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">get welcome message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>)
    }
    retrieveWelcomeMessage() {
        HelloWorldService.executeHelloWorldPathService(this.props.params.name)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(error => this.handleError(error))
    }

    handleSuccessfulResponse(response) {
        this.setState({ welcomeMessage: response.data.message })

    }
    handleError(error) {
        let errorMessage = '';
        if (error.message) {
            errorMessage += error.message
        }
        if (error.response && error.response.data) {
            errorMessage += error.response.data.message
        }
        this.setState({ welcomeMessage: errorMessage })
    }
}


function WithParams(props) {
    let name = useParams()
    return <WelcomeComponent {...props} params={name} />
}

export default WithParams