import _ from 'lodash'; 
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields'

class SurveyForm extends Component {
    renderFields() {
        return _.map(formFields, field => {
            return <Field key={field.name} component={SurveyField} type='text' label={field.label} name={field.name} /> 
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} >

                    {this.renderFields()}

                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>

                    <Link to="/surveys" className="teal btn-flat left white-text">
                        Cancel
                        <i className="material-icons right">cancel</i>
                    </Link>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'You must provide a title';
    } 
    
    if (!values.subject) {
        errors.subject = 'You must provide a subject';
    }

    if(!values.body) {
        errors.body = 'You must have a body'
    }

    if(!values.recipients) {
        errors.recipients = 'You must include at least one recipient'
    } else {
        errors.recipients = validateEmails(values.recipients)
    }
    return errors
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);