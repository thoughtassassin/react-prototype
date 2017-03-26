import React from 'react';

export class Select extends React.Component {
    render() {
        let options = this.props.options.map((option, index) => {
            return (<option value={option} key={index + 1}>{option}</option>);
        });
        options.unshift((<option value="" key="0">Please Select</option>));

        return (
            <div className="form-group select-group">
                <label htmlFor={this.props.id}>
                    {this.props.label} <span className="error-message"> must be selected</span>
                </label>
                <select value={this.props.value} 
                        name={this.props.name} 
                        id={this.props.inputId} 
                        onChange={this.props.handleChange} 
                        className="form-control"
                        required={this.props.required}>{options}</select>
            </div>
        );
    }
}