import React from 'react';

const SurveyField = ({ input, label, meta }) => {

    return (
        <div>
            <label>{ label }</label>
            <input {...input} style={{ marginBottom: '4px'  }} />
            {/* this goes into the validation meta object, if both are true error will show (touched is a boolean) */}
            <div style={{ marginBottom: '25px' }}>
                {meta.touched && meta.error}
            </div>
        </div>
    );
};

export default SurveyField;