import React, { Component } from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useParams } from 'react-router'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import { useNavigate } from 'react-router-dom'
//import { useNavigate } from 'react-router-dom'

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.validate = this.validate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        if (this.state.id === -1) {
            return
        }

        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveTodo(username, this.state.id)
            .then(response => this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
            }))

    }

    validate(values) {
        let e = {}
        if (!values.description) {
            e.description = 'Enter a Description'
        }
        else if (values.description.length < 5) {
            e.description = 'Enter at least 5 Characters in Description'
        }

        if (!moment(values.targetDate).isValid()) {
            e.targetDate = 'Enter a valid Target Date'
        }
        return e;
    }

    onSubmit(values) {
        let username = AuthenticationService.getLoggedInUserName()
        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }
        if (this.state.id === -1) {
            TodoDataService.createTodo(username, todo)
                .then(() => this.props.navigate('/todos'))
        }
        else {
            TodoDataService.updateTodo(username, this.state.id, todo)
                .then(() => this.props.navigate('/todos'))
            //console.log(values)
        }

    }


    render() {
        let { description, targetDate } = this.state
        //let targetDate = this.state.targetDate
        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik
                        initialValues={{
                            description, targetDate
                        }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}

                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate" />
                                    </fieldset>
                                    <button className="btn btn-success" >Save</button>
                                </Form>

                            )
                        }
                    </Formik>
                </div>
            </div>)
    }

}


//function WithParams(props) {

//  let id = useParams()
//return <TodoComponent {...props} params={id} />
//}

function WithNavigate(props) {
    let id = useParams()
    let navigate = useNavigate()
    return <TodoComponent {...props} navigate={navigate} params={id} />
}
//function WithNavigate(props) {
//let navigate = useNavigate()
//return <TodoComponent {...props} navigate={navigate} />

//}

export default WithNavigate