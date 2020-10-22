import React, {Component} from 'react';
import moment from 'moment';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import TodoService from '../../api/todo/TodoService';
import AuthenticationService from './AuthenticationService';

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate : moment(new Date()).format('YYYY-MM-DD'),
            message: ''

        }

        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    onSubmit(value){
        let username = AuthenticationService.getLoggedInUsername();
        let todo = {
            description: value.description,
            id: this.state.id,
            targetDate: value.targetDate
        }
        TodoService.updateTodo(username, this.state.id, todo)
            .then( response => {
               if (response.status !== 200) {
                    this.setState({
                        message: `Something went wrong updating the todo ${this.state.id}`
                    })
               } else {
                   this.props.history.push("/todos");
               }
            })
    }

    validate(values){
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a description'
        } else if (values.description.length<5) {
            errors.description = 'Enter at least 5 characters '
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter a valid Target Date'
        }
        return errors;
    }

    componentDidMount() {
        if (this.state.id !== -1) {
        let username = AuthenticationService.getLoggedInUsername();
        TodoService.retrieveTodoById(username, this.state.id)
            .then( response => {
                console.log(response)
                this.setState({
                    description: response.data.description,
                    targetDate: moment(response.data.targetDate).format('YYYY-MM-DD'),
                })
            })
        }
    }

    render() {
        let {description, targetDate} = this.state;
        return (
            <div>
                <h1>Todo</h1>
                {this.state.message && <div> There was an error updating the todo </div>}
                <div className = "container">
                    <Formik 
                        initialValues={{description,targetDate}}
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                        enableReinitialize={true}
                        >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default TodoComponent;